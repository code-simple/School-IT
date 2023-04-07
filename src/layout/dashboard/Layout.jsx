import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#E5E5E5]">
      <Sidebar />

      <div className="h-full overflow-y-auto flex-grow">
        <Navbar />
        {/* <div className="h-[calc(100vh-43px)] overflow-y-auto">{children}</div> */}
        {children}
      </div>
    </div>
  );
}
