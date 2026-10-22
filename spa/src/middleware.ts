import { NextResponse, type NextRequest } from "next/server";
import { SITE_DISABLED } from "@/lib/site-status";

// Paths that stay reachable while the site is disabled.
// `/aws` is the unlisted flashcards deck; the rest are the bare minimum needed
// for the disabled page itself to render and for crawlers to be told to leave.
const ALLOWED = new Set(["/aws", "/aws.html", "/robots.txt", "/favicon.ico"]);

// Anything ending in a file extension is a static asset (public/resume/*.pdf,
// blob-photo.png, blob.png, ...). Those must not leak while the site is down.
const HAS_EXTENSION = /\.[a-z0-9]+$/i;

// Route-convention images Next generates from src/app/*-image.tsx.
const GENERATED_IMAGES = ["/opengraph-image", "/twitter-image"];

export function middleware(request: NextRequest) {
    if (!SITE_DISABLED) return NextResponse.next();

    const { pathname } = request.nextUrl;

    if (ALLOWED.has(pathname) || pathname.startsWith("/_next/")) {
        return NextResponse.next();
    }

    if (HAS_EXTENSION.test(pathname) || GENERATED_IMAGES.some((p) => pathname.startsWith(p))) {
        return new NextResponse(null, { status: 404 });
    }

    // Rewrite rather than redirect: the URL stays put and nothing gets cached
    // in browsers as a permanent move, so the revert is instant.
    const url = request.nextUrl.clone();
    url.pathname = "/disabled";

    const response = NextResponse.rewrite(url);
    response.headers.set("x-robots-tag", "noindex, nofollow");
    return response;
}

export const config = {
    // Broad on purpose — public/ assets must pass through here to be blocked.
    // Only the build output Next serves directly is excluded.
    matcher: ["/((?!_next/static|_next/image).*)"],
};
