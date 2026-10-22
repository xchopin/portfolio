import Image from "next/image";
import { PROFILE } from "@/components/x/profile";

type ProfileAvatarProps = {
    size: number;
    className?: string;
    priority?: boolean;
};

export default function ProfileAvatar({ size, className = "", priority = false }: ProfileAvatarProps) {
    return (
        <span className={`block shrink-0 overflow-hidden rounded-full bg-card ${className}`}>
            <Image
                src={PROFILE.avatar}
                alt={PROFILE.name}
                width={size}
                height={size}
                priority={priority}
                className="h-full w-full object-cover"
            />
        </span>
    );
}
