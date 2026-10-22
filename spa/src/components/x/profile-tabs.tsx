"use client";
import Link from "next/link";
import { useState, type ReactNode } from "react";

type ProfileTabsProps = {
    posts: ReactNode;
    skills: ReactNode;
};

// Posts/Skills switch in place; Work Experience is its own page.
export default function ProfileTabs({ posts, skills }: ProfileTabsProps) {
    const [tab, setTab] = useState<"posts" | "skills">("posts");

    const tabClass = "flex flex-1 justify-center transition-colors hover:bg-hover";
    const label = (name: string, active: boolean) => (
        <span className={`relative py-4 text-[15px] ${active ? "font-bold" : "font-medium text-muted"}`}>
            {name}
            {active && <span className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-accent" />}
        </span>
    );

    return (
        <>
            <nav className="flex border-b border-line">
                <button className={tabClass} onClick={() => setTab("posts")}>{label("Posts", tab === "posts")}</button>
                <button className={tabClass} onClick={() => setTab("skills")}>{label("Skills", tab === "skills")}</button>
                <Link href="/resume" className={tabClass}>{label("Work Experience", false)}</Link>
            </nav>
            {tab === "posts" ? posts : skills}
        </>
    );
}
