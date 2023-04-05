import React from "react";
import Logo_svg from "../assets/logo_svg";
import Container from "../components/Container";
import About_svg from "../assets/about";
import About_board from "../assets/about_board";
import { useRouter } from "next/router";
import Twitter_icon from "../assets/twitter_icon";
import Fb_icon from "../assets/fb_icon";

const About = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="grid grid-cols-2 h-screen w-screen">
        <div className="h-full">
          <div className="pl-5 pt-5">
            <Logo_svg />
          </div>
          <div className="absolute bottom-3 left-3">
            <p>2019 schoolIT Technology</p>
          </div>
        </div>

        <div className="bg-blue_1">
          <div className="absolute right-5 bottom-5 flex gap-5">
            <Twitter_icon />
            <Fb_icon />
          </div>
        </div>
        <div className="mt-5 shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-[1080px] h-[516px] bg-white">
          <div className="mx-10 my-10 relative">
            <About_svg />
            <p className="absolute top-7 left-16 text-3xl font-bold text-black ">
              About
            </p>
            <div className="grid grid-cols-2 pt-10 gap-24">
              <p>
                SchoolIT Technology is designed to automate a schools diverse
                operations from classes, exams to school events calendar. It
                provides a powerful online community to bring parents, teachers
                and students on a common interactive platform.
              </p>
              <About_board />
            </div>
            <button className="bg-lightred px-20 py-2 mb-20  text-white rounded-full disabled:bg-slate-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
