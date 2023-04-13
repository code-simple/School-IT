import React from "react";
import Image from "next/image";
import Lady_laptop from "@/src/assets/Home_lady_laptop.png";
import Container from "@/src/components/Container";
import HeroBlue from "@/src/assets/HeroBlue";
import HeroRed from "@/src/assets/HeroRed";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4  md:px-0 relative pb-64">
        {/* Vectors */}

        {/* Hero Image and Text */}
        <div className="my-9">
          <h1 className="text-3xl md:text-5xl max-w-[527px] font-medium pb-8">
            A student-centered education and experiential learning platform
          </h1>
          <Link
            href="/Signup"
            className="bg-lightred text-lg font-bold py-2 lg:px-14 px-7 whitespace-nowrap  text-white rounded-full hover:bg-white hover:text-lightred border-2 hover:border-lightred"
          >
            Get Started
          </Link>
        </div>
        <Image src={Lady_laptop} alt="image" />
      </div>
      {/* <div className="hidden md:block lg:block"> */}
      <div className="absolute hidden lg:block left-[-135px] top-0">
        <HeroBlue />
      </div>
      <div className="absolute hidden lg:block  right-0 top-[434px]">
        <HeroRed />
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Hero;
