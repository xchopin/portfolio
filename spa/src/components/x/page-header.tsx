import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    back?: boolean;
};

// Sticky translucent bar at the top of the center column.
export default function PageHeader({ title, subtitle, back = false }: PageHeaderProps) {
    return (
        <div className="sticky top-0 z-30 flex h-[53px] items-center gap-6 bg-canvas/65 px-4 backdrop-blur-md">
            {back && (
                <Link
                    href="/"
                    aria-label="Back"
                    className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-hover"
                >
                    <FiArrowLeft size={20} />
                </Link>
            )}
            <div className="min-w-0">
                <h1 className="truncate text-xl font-bold leading-6">{title}</h1>
                {subtitle && <p className="text-[13px] leading-4 text-muted">{subtitle}</p>}
            </div>
        </div>
    );
}
