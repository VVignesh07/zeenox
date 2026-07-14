"use client";

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Simple breadcrumb generation based on pathname
  const paths = pathname.split("/").filter(Boolean);
  const isOverview = paths.length === 1;

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-border/40">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                {!isOverview && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        {paths[paths.length - 1]}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="ml-auto flex items-center gap-4">
               {/* Place for user profile dropdown or notifications */}
               <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-sm text-primary">
                  U
               </div>
            </div>
          </div>
        </header>
        
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/20">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
