"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  Briefcase,
  BarChart,
  LogOut
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Briefcase,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart,
    },
    {
      title: "Clients",
      url: "/dashboard/clients",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black group-hover:scale-105 transition-transform">
            Z
          </div>
          <span className="font-bold text-lg hidden group-data-[collapsible=icon]:hidden md:block">
            ZeenOx
          </span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const isActive = pathname === item.url;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout" className="text-destructive hover:bg-destructive/10 hover:text-destructive">
              <Link href="/">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
