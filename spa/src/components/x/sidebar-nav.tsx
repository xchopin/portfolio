"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiFileList3Fill, RiFileList3Line, RiHome7Fill, RiHome7Line, RiQuillPenLine } from "react-icons/ri";
import { ThemeToggle } from "@/components/theme-toggle";
import ProfileAvatar from "@/components/x/profile-avatar";
import { PROFILE } from "@/components/x/profile";

export const NAV_ITEMS = [
    { href: "/", label: "Home", icon: RiHome7Line, activeIcon: RiHome7Fill },
    { href: "/resume", label: "Work Experience", icon: RiFileList3Line, activeIcon: RiFileList3Fill },
];

// Same mark as src/app/icon.svg, without the tile, so it follows the text color:
// a brush-stroke C (generated as a pressure stroke along a smooth centerline) whose lower curve
// is crossed by a "/" blade, together forming the X.
export function Logo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="130 160 1030 830" fill="currentColor" aria-hidden className={className}>
            <path d="M545 345L545 339L545 333L545 327L545 321L545 315L545 309L545 304L544 298L544 292L543 287L542 281L541 276L540 270L538 265L536 260L534 255L532 250L529 245L526 240L522 236L519 232L515 228L511 224L507 220L503 216L498 213L494 209L489 206L484 203L479 200L474 197L468 195L463 192L457 190L451 188L445 186L439 184L433 182L427 180L420 179L411 178L402 177L393 177L383 177L374 178L365 179L356 180L347 182L339 184L330 187L321 190L313 194L304 198L296 203L288 208L281 213L273 219L266 225L260 232L253 239L247 247L241 254L236 262L231 271L226 279L222 288L218 297L215 307L212 316L209 326L207 336L205 346L203 357L202 367L201 377L201 388L200 399L201 410L201 421L202 432L203 450L205 467L208 484L212 501L216 517L221 533L226 549L232 564L239 579L246 594L254 608L262 622L271 635L280 649L290 661L300 674L310 686L321 697L332 708L344 719L356 729L369 739L381 748L394 757L408 766L421 774L435 782L450 790L464 797L479 803L494 810L509 815L524 821L540 826L556 830L572 835L588 838L605 842L621 844L638 847L652 848L666 850L679 851L693 852L707 854L720 854L734 855L747 856L761 856L774 857L788 857L801 857L814 857L828 857L841 857L854 856L867 856L880 855L893 855L906 854L919 853L932 852L945 851L958 850L970 848L983 847L995 846L1008 844L1020 843L1032 841L1045 839L1057 838L1069 836L1081 834L1092 832L1104 830L1116 828L1127 826L1139 824L1150 822L1150 822L1139 824L1127 826L1116 828L1104 830L1092 832L1081 833L1069 835L1057 837L1044 838L1032 839L1020 841L1008 842L995 843L983 844L970 845L957 846L945 846L932 847L919 847L906 848L893 848L880 848L867 848L854 848L841 848L828 847L815 847L801 846L788 845L775 844L762 843L748 842L735 840L722 839L708 837L695 835L682 833L668 830L655 828L642 825L626 822L610 818L595 813L580 809L565 803L550 798L536 791L522 785L508 778L495 771L482 763L470 755L458 746L446 737L435 728L424 719L414 709L404 699L395 689L386 678L377 667L369 656L362 645L355 634L348 622L342 610L336 598L331 586L326 574L322 562L319 549L315 537L313 524L311 511L309 498L308 485L307 472L307 459L307 445L308 432L309 423L310 415L312 407L313 400L315 392L316 385L318 378L320 371L322 365L324 359L326 353L328 347L330 342L332 336L334 331L336 326L339 322L341 317L343 313L345 309L348 305L350 301L352 297L355 293L358 290L360 286L363 283L366 280L369 277L373 274L376 271L380 268L384 265L388 262L393 260L398 258L403 256L408 254L414 252L420 251L424 250L428 249L433 248L437 247L441 247L445 247L449 246L453 246L457 247L461 247L465 248L469 249L472 250L476 251L480 252L483 254L487 255L490 257L493 260L497 262L500 264L503 267L506 270L509 272L512 275L516 278L519 281L522 285L525 289L528 292L531 297L534 301L536 306L538 311L540 316L542 321L543 327L544 333L545 339L545 345Z" />
            <path d="M140 900C318 740 567 544 995 294C639 597 389 829 229 980Z" />
        </svg>
    );
}

// Left rail: icon-only from sm, labelled from xl. Hidden on mobile (see MobileNav).
export default function SidebarNav() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 hidden h-screen shrink-0 flex-col justify-between px-2 py-1 sm:flex sm:w-[88px] xl:w-[275px]">
            <div className="flex flex-col items-center xl:items-start">
                <Link
                    href="/"
                    aria-label="Home"
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-2xl transition-colors hover:bg-hover"
                >
                    <Logo className="h-[26px] w-auto" />
                </Link>

                <nav className="mt-0.5 flex flex-col items-center xl:items-start">
                    {NAV_ITEMS.map(({ href, label, icon: Icon, activeIcon: ActiveIcon }) => {
                        const active = pathname === href;
                        return (
                            <Link key={href} href={href} className="group py-1" aria-current={active ? "page" : undefined}>
                                <span className="flex items-center gap-5 rounded-full p-3 transition-colors group-hover:bg-hover">
                                    {active ? <ActiveIcon size={26} /> : <Icon size={26} />}
                                    <span className={`hidden pr-4 text-xl xl:inline ${active ? "font-bold" : ""}`}>{label}</span>
                                </span>
                            </Link>
                        );
                    })}
                    <div className="py-1">
                        <ThemeToggle label className="p-3 xl:pr-7" />
                    </div>
                </nav>

                <a
                    href={PROFILE.contact}
                    className="mt-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-ink text-canvas transition-opacity hover:opacity-90 xl:w-[233px]"
                >
                    <RiQuillPenLine size={24} className="xl:hidden" />
                    <span className="hidden text-[17px] font-bold xl:inline">Contact</span>
                </a>
            </div>

            <Link
                href="/"
                className="my-3 flex items-center gap-3 rounded-full p-3 transition-colors hover:bg-hover"
            >
                <ProfileAvatar size={40} className="h-10 w-10" />
                <span className="hidden min-w-0 leading-5 xl:block">
                    <span className="block truncate text-[15px] font-bold">{PROFILE.name}</span>
                    <span className="block truncate text-[15px] text-muted">@{PROFILE.handle}</span>
                </span>
            </Link>
        </header>
    );
}

// Bottom tab bar under 640px, X mobile style.
export function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed inset-x-0 bottom-0 z-40 flex h-[53px] items-center justify-around border-t border-line bg-canvas/90 backdrop-blur-md sm:hidden">
            {NAV_ITEMS.map(({ href, label, icon: Icon, activeIcon: ActiveIcon }) => (
                <Link key={href} href={href} aria-label={label} className="flex h-full flex-1 items-center justify-center">
                    {pathname === href ? <ActiveIcon size={26} /> : <Icon size={26} />}
                </Link>
            ))}
            <div className="flex flex-1 justify-center">
                <ThemeToggle className="p-3" />
            </div>
        </nav>
    );
}
