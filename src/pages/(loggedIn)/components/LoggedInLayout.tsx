import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Sidebar } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import AppNavbar from "@/components/app-navbar";

export default function LoggedInLayout() {
  return (
    <div className="w-screen">
      <AppNavbar />
      <SidebarProvider>
        <AppSidebar />
        <main className="container">
          <ScrollArea className="rounded-md border h-screen">
            <Outlet />
          </ScrollArea>
        </main>
        <Sidebar collapsible="none" side="right" />
      </SidebarProvider>
    </div>
  );
}
