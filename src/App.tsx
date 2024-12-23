import React from "react";
import Todo from "./components/todo";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import AgvList from "./components/agv-list";
import AgvDetails from "./components/pages/agv-detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { SidebarRight } from "./components/sidebar-right";


export default function App({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
      <Toaster />
      <Router>
      <div className="w-full justify-center pt-14 h-1">
      <h1 className="font-bold text-4xl">AGV List</h1>
      <Routes>
        {/* AGV List Page */}
        <Route path="/" element={<AgvList />} />

        {/* AGV Details Page */}
        <Route path="/agv/:id" element={<AgvDetails />} />
      </Routes>
      </div>
    </Router>
    <SidebarRight />
    </SidebarProvider>
  );
}
/*  TODO
<div className='w-full justify-center items-center flex mb-3'>
<Todo />
</div>
*/

/*
      <div className="w-full justify-center pt-14 h-1">
        <h1 className="font-bold text-4xl">AGV List</h1>
        <div className="pt-4 pr-6"><AgvList /></div>
      </div>
*/
