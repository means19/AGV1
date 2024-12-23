import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import AgvList from "../agv-list";

export default function ListPage({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
      <div className="w-full justify-center pt-14 h-1">
        <h1 className="font-bold text-4xl">AGV List</h1>
        <div className="pt-4 pr-6"><AgvList /></div>
      </div>
    </SidebarProvider>
  );
}

