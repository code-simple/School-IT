import React from "react";
import { useRouter } from "next/router";
const Button = ({ btname, path }) => {
  const router = useRouter();
  return (
    <button onClick={()=>router.push(path)} className="bg-lightred text-lg font-bold py-2 px-14 m-8 text-white rounded-full disabled:bg-slate-300">
      {btname}
    </button>
  );
};

export default Button;
