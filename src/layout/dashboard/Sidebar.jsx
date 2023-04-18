import React, { useContext, useEffect, useState } from "react";
import Logo_hat from "@/src/assets/Logo_Hat";
import Image from "next/image";
import Avatar from "@/src/assets/avatar.png";
import Link from "next/link";
import Admin_home from "@/src/assets/admin_home";
import Admin_people from "@/src/assets/admin_people";
import Admin_attendance from "@/src/assets/admin_attendance";
import Admin_expenses from "@/src/assets/admin_expenses";
import Admin_events from "@/src/assets/admin_events";
import Close from "@/src/assets/Close";
import clsx from "clsx";
import { UserContext } from "./Layout";
import { useRouter } from "next/router";
import { cn } from "@/src/utils/cn";
import { auth, db } from "@/src/components/config/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const { menuClosed, setMenuClosed } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState([]);

  const router = useRouter();
  //User details
  const [user, loading] = useAuthState(auth);
  // console.log(user?.uid);
  const userRef = collection(db, "users");
  // // Server side filtered query
  const getUserDetails = async () => {
    const data = await getDoc(doc(db, "users", user.uid));
    setUserDetails(data.data());
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <div
        className={clsx(
          "bg-[#435260] w-[248px] shrink-0 h-full absolute lg:relative  overflow-y-auto z-20",
          {
            "translate-x-[-100%] lg:translate-x-0": menuClosed,
            "translate-x-0": !menuClosed,
          }
        )}
      >
        <div className="flex justify-between pl-7 pt-2 pb-14">
          <Link href="/">
            <Logo_hat />
          </Link>

          <button
            className="lg:hidden pr-5 text-lightred"
            onClick={() => setMenuClosed(!menuClosed)}
          >
            {!menuClosed && <Close />}
          </button>
        </div>
        <div className="grid bg-[#2D4053] place-items-center py-8 text-white text-base">
          <Image src={Avatar} alt="avatar" priority />
          <span className="text-base pt-2">
            {userDetails.firstname} {userDetails.lastname}
          </span>
          <span className="text-xs pt-7">{userDetails.email}</span>
        </div>
        <div className="grid gap-4 pt-14">
          <Link href="/dashboard">
            <div
              className={cn(
                "flex text-white  gap-4  pl-8  hover:bg-[#2D4053] py-2 rounded-r-lg",
                {
                  "bg-[#2D4053]": router.pathname == "/dashboard",
                }
              )}
            >
              <div className="flex justify-center gap-5">
                <Admin_home /> <span>Home</span>
              </div>
            </div>
          </Link>

          <Link href="/dashboard/employees">
            <div
              className={cn(
                "flex text-white  gap-4  pl-7  hover:bg-[#2D4053] py-2 rounded-r-lg",
                {
                  "bg-[#2D4053]": router.pathname == "/dashboard/employees",
                }
              )}
            >
              <div className="flex justify-center gap-3">
                <Admin_people />
                <span>Employee</span>
              </div>
            </div>
          </Link>
          <Link href="/dashboard/attendance-tracker">
            <div
              className={cn(
                "flex text-white  gap-4  pl-8  hover:bg-[#2D4053] py-2 rounded-r-lg",
                {
                  "bg-[#2D4053]":
                    router.pathname == "/dashboard/attendance-tracker",
                }
              )}
            >
              <div className="flex justify-center gap-5">
                <Admin_attendance />
                <p>Attendance</p>
              </div>
            </div>
          </Link>

          <Link href="/dashboard/accounts">
            <div
              className={cn(
                "flex text-white  gap-4  pl-7  hover:bg-[#2D4053] py-2 rounded-r-lg",
                {
                  "bg-[#2D4053]": router.pathname == "/dashboard/accounts",
                }
              )}
            >
              <div className="flex justify-center gap-3">
                <Admin_expenses />
                <p>Accounts</p>
              </div>
            </div>
          </Link>
          <Link href="/dashboard/create-event">
            <div
              className={cn(
                "flex text-white  gap-4  pl-8  hover:bg-[#2D4053] py-2 rounded-r-lg",
                {
                  "bg-[#2D4053]": router.pathname == "/dashboard/create-event",
                }
              )}
            >
              <Admin_events />
              Events
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
