import { MdVerified } from "react-icons/md";

export default function VerifiedBadge({ size = 18 }: { size?: number }) {
    return <MdVerified size={size} className="shrink-0 text-accent" aria-label="Verified" />;
}
