import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#E5E5E5]">
      <Sidebar />

      <div className="h-full overflow-y-auto flex-grow">
        <Navbar />
        {children}
      </div>
    </div>
  );
}