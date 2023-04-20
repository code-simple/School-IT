import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Admin_dropdown from "../assets/admin_dropdown";
import { cn } from "../utils/cn";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { useRouter } from "next/router";

export default function MyDropdown() {
  const router = useRouter();

  const signOutNow = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className="flex items-center">
          <h3 className="text-base font-bold pl-2 md:pl-7 pr-1">Account</h3>
          <Admin_dropdown />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-1500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-1500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-12 right-12 z-10 p-3 rounded-lg origin-top-right  bg-white shadow-lg ">
          <div className="grid py-1 ">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={cn("flex p-2 px-2 rounded-lg", {
                    "bg-lightred/20 text-slate-800": active,
                    "block px-4 py-2 text-sm": !active,
                  })}
                >
                  <Link href="#">Account settings</Link>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={cn("flex p-2 px-2 rounded-lg", {
                    "bg-lightred/20 text-slate-800": active,
                    "block px-4 py-2 text-sm": !active,
                  })}
                >
                  <Link href="#">Support</Link>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={cn("flex p-2 px-2 rounded-lg", {
                    "bg-lightred/20 text-slate-800": active,
                    "block px-4 py-2 text-sm": !active,
                  })}
                >
                  <Link href="#">Contact</Link>
                </div>
              )}
            </Menu.Item>

            <Menu.Item onClick={() => signOutNow()}>
              {({ active }) => (
                <div
                  className={cn("flex p-2 px-2 rounded-lg", {
                    "bg-lightred/20 text-slate-800": active,
                    "block px-4 py-2 text-sm": !active,
                  })}
                >
                  Sign out
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
