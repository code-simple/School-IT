import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { createContext } from "react";
import Authenticated from "@/src/components/Authenticated";

export const UserContext = createContext({});

export default function Layout({ children }) {
  // Boolean useContext for BreadCrumb / Close button
  const [menuClosed, setMenuClosed] = useState(true);

  return (
    <UserContext.Provider value={{ menuClosed, setMenuClosed }}>
      <Authenticated>
        <div className="flex h-screen bg-[#E5E5E5]">
          <Sidebar />

          <div className="h-full overflow-y-auto flex-grow">
            <Navbar />
            {children}
          </div>
        </div>
      </Authenticated>
    </UserContext.Provider>
  );
}
