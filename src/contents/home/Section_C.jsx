import React from "react";
import Section_c_1 from "../../assets/section_c_1";
import Container from "../../components/Container";
import Section_C_2 from "../../assets/section_C_2";
import Section_C_3 from "../../assets/Section_C_3";
import Link from "next/link";
import Wave from "@/src/assets/wave";

const Section_C = () => {
  return (
    <Container>
      <div className="relative grid lg:grid-cols-3  lg:flex px-4 lg:px-0  justify-evenly  lg:space-y-0  mt-20">
        <div className="absolute hidden lg:block -z-10">
          <Wave />
        </div>
        <div className=" bg-white shadow-lg mt-3 sm:mt-0 px-32 max-w-[416px] pt-12 justify-center items-center flex flex-col">
          <Section_c_1 />
          <span className="my-8">Intuitive interface</span>
        </div>
        <div className="bg-white shadow-lg mt-3 sm:mt-0 px-32 pt-12 max-w-[416px] justify-center items-center flex flex-col">
          <Section_C_2 />
          <span className="my-8 whitespace-nowrap">
            Massive time savings for entire staff
          </span>
        </div>
        <div className="bg-white shadow-lg mt-3 sm:mt-0 px-32 pt-12 max-w-[416px] justify-center items-center flex flex-col">
          <Section_C_3 />
          <span className="my-8">Easy to use</span>
        </div>
      </div>
      <div className="flex justify-center pt-14">
        <Link
          href="/Signup"
          className="bg-lightred text-lg font-bold py-2 lg:px-14 px-7 whitespace-nowrap  text-white rounded-full hover:bg-white hover:text-lightred border-2 hover:border-lightred"
        >
          Get Started
        </Link>
      </div>
    </Container>
  );
};

export default Section_C;
