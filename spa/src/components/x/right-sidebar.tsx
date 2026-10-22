import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { PROFILE } from "@/components/x/profile";

const TRENDS = [
    { context: "Trending in Backend", topic: "Java", posts: "9 years" },
    { context: "Frameworks · Trending", topic: "Spring Boot", posts: "Spring Vanguard" },
    { context: "Cloud · Trending", topic: "AWS", posts: "Solutions Architect" },
    { context: "Messaging · Trending", topic: "Kafka", posts: "Confluent, Avro" },
    { context: "Trending in GenAI", topic: "#SpringAI", posts: "MCP, Agents" },
    { context: "DevOps · Trending", topic: "Kubernetes", posts: "Docker, Helm" },
];

const FOLLOW = [
    { name: "GitHub", handle: "xchopin", href: PROFILE.github, icon: <FaGithub size={22} /> },
    { name: "LinkedIn", handle: "chopinxavier", href: PROFILE.linkedin, icon: <FaLinkedin size={22} /> },
];

function Card({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-line">
            <h2 className="px-4 py-3 text-xl font-extrabold">{title}</h2>
            {children}
        </section>
    );
}

export default function RightSidebar() {
    return (
        <aside className="hidden w-[350px] shrink-0 pl-8 lg:block">
            <div className="sticky top-0 z-10 bg-canvas py-1">
                <label className="flex h-[42px] items-center gap-3 rounded-full border border-line px-4 text-muted focus-within:border-accent focus-within:text-accent">
                    <FiSearch size={16} />
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
                    />
                </label>
            </div>

            <div className="pt-3 pb-16">
                <Card title="What’s happening">
                    {TRENDS.map((trend) => (
                        <div key={trend.topic} className="flex justify-between px-4 py-3 transition-colors hover:bg-ink/[0.03]">
                            <div className="leading-5">
                                <p className="text-[13px] text-muted">{trend.context}</p>
                                <p className="text-[15px] font-bold">{trend.topic}</p>
                                <p className="text-[13px] text-muted">{trend.posts}</p>
                            </div>
                            <FiMoreHorizontal className="text-muted" />
                        </div>
                    ))}
                </Card>

                <Card title="Who to follow">
                    {FOLLOW.map((account) => (
                        <a
                            key={account.name}
                            href={account.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-ink/[0.03]"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card">{account.icon}</span>
                            <span className="min-w-0 flex-1 leading-5">
                                <span className="block text-[15px] font-bold">{account.name}</span>
                                <span className="block text-[15px] text-muted">@{account.handle}</span>
                            </span>
                            <span className="rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-canvas">Follow</span>
                        </a>
                    ))}
                </Card>

                <footer className="px-4 text-[13px] leading-4 text-muted">
                    © {new Date().getFullYear()} {PROFILE.name} · Made with Next.js
                </footer>
            </div>
        </aside>
    );
}
