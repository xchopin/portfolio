import type { ReactNode } from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { RiPushpin2Fill } from "react-icons/ri";
import { FiShare } from "react-icons/fi";
import VerifiedBadge from "@/components/x/verified-badge";
import ProfileAvatar from "@/components/x/profile-avatar";
import { PROFILE } from "@/components/x/profile";

type PostProps = {
    children: ReactNode;
    date?: string;
    name?: string;
    handle?: string;
    verified?: boolean;
    pinned?: boolean;
    media?: ReactNode;
    // Draws the thread line from the avatar down to the reply rendered right after this post.
    thread?: boolean;
    replyingTo?: string;
    // Decorative counts for the action row: [replies, reposts, likes, views].
    stats?: [string, string, string, string];
};

export default function Post({
    children,
    date,
    name = PROFILE.name,
    handle = PROFILE.handle,
    verified = true,
    pinned = false,
    media,
    thread = false,
    replyingTo,
    stats = ["", "", "", ""],
}: PostProps) {
    const actions = [
        { icon: <FaRegComment size={16} />, label: "Reply", hover: "group-hover/a:text-accent group-hover/a:bg-accent/10" },
        { icon: <BiRepost size={20} />, label: "Repost", hover: "group-hover/a:text-[#00ba7c] group-hover/a:bg-[#00ba7c]/10" },
        { icon: <FaRegHeart size={16} />, label: "Like", hover: "group-hover/a:text-[#f91880] group-hover/a:bg-[#f91880]/10" },
        { icon: <IoStatsChart size={16} />, label: "Views", hover: "group-hover/a:text-accent group-hover/a:bg-accent/10" },
    ];

    return (
        <article className={`${thread ? "" : "border-b border-line"} px-4 pt-3 transition-colors hover:bg-ink/[0.03]`}>
            {pinned && (
                <div className="mb-1 flex items-center gap-3 pl-6 text-[13px] font-bold text-muted">
                    <RiPushpin2Fill size={14} />
                    Pinned
                </div>
            )}
            <div className="flex gap-3">
                <div className="flex shrink-0 flex-col items-center">
                    <ProfileAvatar size={40} className="h-10 w-10" />
                    {thread && <div className="mt-1 w-0.5 flex-1 bg-line" />}
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-[15px] leading-5">
                        <span className="truncate font-bold">{name}</span>
                        {verified && <VerifiedBadge />}
                        <span className="truncate text-muted">@{handle}</span>
                        {date && (
                            <>
                                <span className="text-muted">·</span>
                                <span className="shrink-0 text-muted">{date}</span>
                            </>
                        )}
                    </div>
                    {replyingTo && (
                        <p className="text-[15px] leading-5 text-muted">
                            Replying to <span className="text-accent">@{replyingTo}</span>
                        </p>
                    )}
                    <div className="mt-0.5 text-[15px] leading-5 whitespace-pre-line">{children}</div>
                    {media && (
                        <div className="mt-3 overflow-hidden rounded-2xl border border-line">{media}</div>
                    )}
                    <div className="my-1 flex max-w-md items-center justify-between text-[13px] text-muted">
                        {actions.map((action, i) => (
                            <span key={action.label} className="group/a -ml-2 flex items-center" aria-label={action.label}>
                                <span className={`flex h-[34px] w-[34px] items-center justify-center rounded-full transition-colors ${action.hover}`}>
                                    {action.icon}
                                </span>
                                <span className="px-1">{stats[i]}</span>
                            </span>
                        ))}
                        <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full transition-colors hover:bg-accent/10 hover:text-accent">
                            <FiShare size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}
