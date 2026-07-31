import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Temporarily disabled",
    robots: { index: false, follow: false },
};

export default function DisabledPage() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
            {/* Gradient orb, echoing the accent used on the OG card */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-40 blur-[90px]"
                style={{ background: "linear-gradient(120deg, #60a5fa, #c084fc, #f472b6)" }}
            />

            <div className="relative z-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Temporarily disabled
                </h1>
                <p className="mt-5 text-base opacity-70 sm:text-lg">
                    This site is offline for a moment. Check back soon.
                </p>
            </div>
        </main>
    );
}
