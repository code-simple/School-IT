import React from "react";
import Image from "next/image";
import Lady_laptop from '../assets/Home_lady_laptop.png'
import Container from "./Container";
import Button from "./Button";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-0 my-28">
      <div>
        <h1 className="md:text-4xl text-2xl max-w-[527px] font-medium ">
          A student-centered education and experiential learning platform
        </h1>
        <Button btname='Get Started'/>
      </div>
      <Image src={Lady_laptop} alt="image" />
    </div>
    </Container>
  );
};

export default Hero;
