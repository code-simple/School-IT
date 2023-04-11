import React from "react";
import Nav from "@/src/contents/home/navbar";
import Hero from "@/src/contents/home/Hero";
import Section_B from "@/src/contents/home/Section_B";
import Section_C from "@/src/contents/home/Section_C";
import Footer from "@/src/contents/home/Footer";

const HomeComponent = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Section_B />
      <Section_C />
      <Footer />
    </div>
  );
};

export default HomeComponent;
