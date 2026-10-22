import type { ReactNode } from "react";
import RightSidebar from "@/components/x/right-sidebar";
import SidebarNav, { MobileNav } from "@/components/x/sidebar-nav";

// X's three-column layout: nav rail, 600px feed, sidebar.
export default function LayoutShell({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto flex min-h-screen max-w-[1265px] justify-center">
            <SidebarNav />
            <main className="min-h-screen w-full min-w-0 border-x-0 border-line pb-[53px] sm:w-[600px] sm:border-x sm:pb-0">
                {children}
            </main>
            <RightSidebar />
            <MobileNav />
        </div>
    );
}
