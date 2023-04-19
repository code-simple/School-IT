import { useState } from "react";
import Logo_svg from "@/src/assets/logo_svg";
import Link from "next/link";
import Container from "@/src/components/Container";
import Close from "@/src/assets/Close";
import Burger from "@/src/assets/Burger";
import { cn } from "@/src/utils/cn";

const Nav = () => {
  const [menuClosed, setMenuClosed] = useState(true);
  return (
    <Container>
      <div className="flex md:justify-between flex-col md:flex-row">
        <div className="flex justify-between">
          <Link href="/" className="lg:pl-16 pl-8 pt-4 items-center  lg:pt-6">
            <Logo_svg />
          </Link>
          <button
            className="text-3xl block md:hidden pr-2 text-primary"
            onClick={() => setMenuClosed((closed) => !closed)}
          >
            {menuClosed ? <Burger /> : <Close />}
          </button>
        </div>

        <ul
          className={cn(
            "md:mr-14 flex justify-center font-medium text-center px-8 sm:px-4 md:px-0 space-y-4 md:space-y-0  md:mt-0 items-center flex-col md:flex-row",
            {
              "translate-x-[-100%] md:translate-x-0": menuClosed,
              "translate-x-0": !menuClosed,
            }
          )}
        >
          <Link
            className="md:ml-5 hover:text-[#F18585] hover:border-b-2 border-b-[#F18585]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="md:ml-5 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
            href="/about"
          >
            About
          </Link>
          <Link
            className="md:ml-5 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
            href="#"
          >
            Products
          </Link>
          <Link
            className="md:ml-5 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="md:ml-5 bg-[#F18585] w-full px-2  lg:px-8 rounded-full hover:bg-white border-2 border-[#F18585] hover:text-[#F18585] text-white md:py-1 py-1.5"
            href="/login"
          >
            Sign In
          </Link>
        </ul>
      </div>
    </Container>
  );
};

export default Nav;
