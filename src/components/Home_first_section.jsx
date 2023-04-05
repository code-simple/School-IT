import React from "react";
import Image from "next/image";
import Lady_laptop from '../assets/Home_lady_laptop.png'

const Home_first_section = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-0 my-28">
      <div>
        <h1 className="md:text-4xl text-2xl max-w-[527px] font-medium ">
          A student-centered education and experiential learning platform
        </h1>
        <button className="bg-lightred text-lg  font-bold py-2 px-14 m-8 text-white rounded-full disabled:bg-slate-300">
          Get Started
        </button>
      </div>
      <Image src={Lady_laptop} alt="image" />
    </div>
  );
};

export default Home_first_section;
