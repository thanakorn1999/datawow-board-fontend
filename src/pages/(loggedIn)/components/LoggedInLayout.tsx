import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Sidebar } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
const Navbar = () => {
  return (
    <div className="bg-green-500 text-white  py-2 px-5 flex justify-between mb-6">
      a Board
    </div>
  );
};
export default function LoggedInLayout() {
  return (
    <div className="w-screen">
      <Navbar />
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
