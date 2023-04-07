import React from "react";
import Image from "next/image";
import Lady_laptop from "@/src/assets/Home_lady_laptop.png";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";
import HeroBlue from "@/src/assets/HeroBlue";
import HeroRed from "@/src/assets/HeroRed";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 pb-20 md:px-0 relative">
        {/* Vectors */}
        <div className="hidden md:block lg:block">
          <div className="absolute left-[-135px] top-[59px]">
            <HeroBlue />
          </div>
          <div className="absolute left-[1292px] top-[434px]">
            <HeroRed />
          </div>
        </div>
        {/* Hero Image and Text */}
        <div className="my-56">
          <h1 className="md:text-4xl text-5xl max-w-[527px] font-medium ">
            A student-centered education and experiential learning platform
          </h1>
          <Button btname="Get Started" path="/signup" />
        </div>
        <Image src={Lady_laptop} alt="image" />
      </div>
    </Container>
  );
};

export default Hero;
