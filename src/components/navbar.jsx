import React from "react";
import Logo_svg from "../assets/logo_svg";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="pl-16 pt-6">
        {" "}
        <Logo_svg />
      </div>
      <div className="flex flex-col md:flex-row mt-9 md:mt-0 items-center gap-12">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/products'>Products</Link>
        <Link href='/contact'>Contact</Link>
        <button className='bg-lightred px-10 py-2 font-bold text-sm text-white rounded-full '>Sign in</button>        
      </div>
    </div>
  );
};

export default Nav;
