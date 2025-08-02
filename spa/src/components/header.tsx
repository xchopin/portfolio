"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {ThemeToggle} from "@/components/theme-toggle";

export default function Header() {
    const pathname = usePathname();

    const activeClass = (path: string) =>
        `text-sm font-semibold transition-colors ${pathname === path ? "text-black  dark:text-white" 
            : "text-gray-700 hover:text-black dark:hover:text-white dark:text-white/60"}`;

    return (
        <header className="flex justify-between items-center p-6 mb-2">
            <div className="text-lg font-semibold">XC</div>
            <nav className="flex justify-center">
                <ul className="flex items-center gap-6 px-6 py-2 rounded-full backdrop-blur-md border text-sm
                bg-zinc-50 border-black/10 dark:bg-zinc-800/50  dark:border-white/15 dark:shadow-sm">
                    <li>
                        <Link href="/" className={activeClass("/")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className={activeClass("/resume")}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>

            <ThemeToggle />
        </header>
    );
}
