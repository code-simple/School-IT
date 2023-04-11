import Link from "next/link";
import React from "react";
const Button = ({ btname, path }) => {
  return (
    <Link
      href={path}
      className="bg-lightred text-lg font-bold py-2 lg:px-14 px-7 whitespace-nowrap m-8 text-white rounded-full disabled:bg-slate-300"
    >
      {btname}
    </Link>
  );
};

export default Button;
