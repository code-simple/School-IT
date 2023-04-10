import React from "react";
import Logo_hat from "@/src/assets/Logo_Hat";
import Image from "next/image";
import Avatar from "@/src/assets/avatar.png";
import Link from "next/link";
import Admin_home from "@/src/assets/admin_home";
import Admin_people from "@/src/assets/admin_people";
import Admin_attendance from "@/src/assets/admin_attendance";
import Admin_expenses from "@/src/assets/admin_expenses";
import Admin_events from "@/src/assets/admin_events";
import Container from "@/src/components/Container";

const Sidebar = () => {
  return (
    // <div className="basis-[248px] h-full shrink-0 flex flex-col  bg-[#435260]">
    <div className="w-[248px] h-full shrink-0   bg-[#435260] hidden md:block">
      <div className="pl-7 pt-2 pb-14">
        <Logo_hat />
      </div>
      <div className="grid bg-[#2D4053] place-items-center py-8 text-white text-base">
        <Image src={Avatar} alt="avatar" />
        <span className="text-base pt-2">Richard Oyome</span>
        <span className="text-xs pt-7">Super Admin</span>
      </div>
      <div className="grid gap-4 pt-14">
        <Link href="/dashboard">
          <div className="flex text-white  gap-4  pl-8 hover:bg-[#2D4053] py-2 rounded-r-lg ">
            <Admin_home />
            Home
          </div>
        </Link>
        <Link href="/dashboard/employees">
          <div className="flex text-white pl-8  gap-4 hover:bg-[#2D4053] py-2 rounded-r-lg ">
            <Admin_people />
            Employee
          </div>
        </Link>
        <Link href="/dashboard/attendance-tracker">
          <div className="flex text-white pl-8  gap-4 hover:bg-[#2D4053] py-2 rounded-r-lg">
            <Admin_attendance />
            Attendance
          </div>
        </Link>

        <Link href="/dashboard/accounts">
          <div className="flex text-white pl-8  gap-4 hover:bg-[#2D4053] py-2 rounded-r-lg">
            <Admin_expenses />
            Accounts
          </div>
        </Link>
        <Link href="/dashboard/create-event">
          <div className="flex text-white pl-8  gap-4 hover:bg-[#2D4053] py-2 rounded-r-lg">
            <Admin_events />
            Events
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
