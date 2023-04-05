import React from "react";
import Image from "next/image";
import Section_B_img from "../assets/Section_B.png";
import Man from "../assets/Man";
import Pc from "../assets/Pc";
import People from "../assets/People";

const Section_B = () => {
  return (
    <div className="flex bg-blue_1 bg-opacity-10 justify-center items-center flex-col md:flex-row py-32 gap-8">
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-medium  max-w-[536px]">
          Increase adoption across your learning community
        </p>
        <p className="max-w-[536px]">
          SchoolIT is designed to automate a school's diverse operations from classes, exams to school events calendar.
        </p>
        <div className="flex gap-4 items-center">
          <Pc />
          <p>
            Modern tools that promote technology-oriented culture and digital 
            literacy.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <People />
          <p>Increased student, parent, and family engagement.</p>
        </div>
        <div className="flex gap-4 items-center">
          <Man />
          <p>Well-received tools that enable progressive practices.</p>
        </div>
      </div>
      <Image src={Section_B_img} alt="image2" />
    </div>
  );
};

export default Section_B;
