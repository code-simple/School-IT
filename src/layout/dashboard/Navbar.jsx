import React from "react";
import Avatar from "@/src/assets/admin_avatar_small.png";
import Image from "next/image";
import Admin_dropdown from "@/src/assets/admin_dropdown";

const Navbar = () => {
  return (
    // <div className="sticky top-0 left-0 flex justify-end pr-20 pt-2 bg-red">
    <div className="sticky top-0 left-0 flex justify-end pr-20 pt-2 bg-[#E5E5E5]">
      <div className="flex justify-center items-center ">
        <Image src={Avatar} alt="avatar" />
        <h3 className="text-base font-bold pl-7 pr-1">Account</h3>
        <Admin_dropdown />
      </div>
    </div>
  );
};

export default Navbar;
