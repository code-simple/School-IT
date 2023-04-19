import React, { useContext, useState } from "react";
import Avatar from "@/src/assets/admin_avatar_small.png";
import Image from "next/image";
import { UserContext } from ".";
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
      <div className="sticky top-0 left-0 flex justify-between pr-3 lg:pr-20 py-2 bg-[#E5E5E5] z-10 border-b-2 border-black/10">
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
          <div
            className="flex items-center cursor-pointer"
            onClick={handlechange}
          >
            {MyDropdown()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
