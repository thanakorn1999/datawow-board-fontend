import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { selectUser } from "@/redux/slices/userSlice";
import { useSelector } from "react-redux";
export function AppSidebar() {
  const user = useSelector((state) => selectUser(state));
  const items = [
    {
      title: "Home",
      url: "/board",
      icon: Home,
    },
    ...(user.id
      ? [
          {
            title: "Our Blog",
            url: "/board/me",
            icon: Inbox,
          },
        ]
      : []),
  ];
  return (
    <Sidebar collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
