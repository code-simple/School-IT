import React from "react";
import Section_c_1 from "../assets/section_c_1";
import Container from "./Container";
import Section_C_2 from "../assets/section_C_2";
import Section_C_3 from "../assets/Section_C_3";
import Button from "./Button";

const Section_C = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-3 px-4 sm:px-0 justify-center sm:space-y-0 justify-items-center  mt-20">
        <div className="shadow-lg mt-3 sm:mt-0 px-32 pt-12 justify-center items-center flex flex-col">
          <Section_c_1 />
          <span className="my-8">Intuitive interface</span>
        </div>
        <div className="shadow-lg mt-3 sm:mt-0 px-32 pt-12 justify-center items-center flex flex-col">
          <Section_C_2 />
          <span className="my-8 text-center">
            Massive time savings for entire staff
          </span>
        </div>
        <div className="shadow-lg mt-3 sm:mt-0 px-32 pt-12 justify-center items-center flex flex-col">
          <Section_C_3 />
          <span className="my-8">Easy to use</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Button btname="Get Started" path='/signup' />
      </div>
    </Container>
  );
};

export default Section_C;
