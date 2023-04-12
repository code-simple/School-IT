import React, { useContext, useState } from "react";
import Avatar from "@/src/assets/admin_avatar_small.png";
import Image from "next/image";
import Admin_dropdown from "@/src/assets/admin_dropdown";
import { UserContext } from "./Layout";
import Burger from "@/src/assets/Burger";
import MyDropdown from "@/src/components/MenuDropDown";

const Navbar = () => {
  const { menuClosed, setMenuClosed } = useContext(UserContext);
  const [view, setView] = useState(false);
  const handlechange = () => {
    setView(!view);
  };
  return (
    <>
      <div className="sticky top-0 left-0 flex justify-between pr-20 pt-2 bg-[#E5E5E5] z-10 ">
        <div>
          <button
            className="block  lg:hidden pl-2 pt-2.5 absolute"
            onClick={() => setMenuClosed(!menuClosed)}
          >
            {menuClosed && <Burger />}
          </button>
        </div>
        <div className="flex justify-center items-center ">
          <Image src={Avatar} alt="avatar" />
          <a
            className="flex items-center cursor-pointer"
            onClick={handlechange}
          >
            {MyDropdown()}
          </a>
        </div>
        {/* {view && <h1>hellooo</h1>} */}
      </div>
    </>
  );
};

export default Navbar;
