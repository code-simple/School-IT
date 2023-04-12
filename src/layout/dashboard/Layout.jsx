import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { createContext } from "react";

export const UserContext = createContext({});

export default function Layout({ children }) {
  const [menuClosed, setMenuClosed] = useState(true);

  return (
    <UserContext.Provider value={{ menuClosed, setMenuClosed }}>
      <div className="flex h-screen bg-[#E5E5E5]">
        <Sidebar />

        <div className="h-full overflow-y-auto flex-grow">
          <Navbar />
          {children}
        </div>
      </div>
    </UserContext.Provider>
  );
}
