import Container from "../components/Container";
import React from "react";
import Nav from "../components/navbar";
import Home_first_section from "../components/Home_first_section";
import Home_section_2 from "../components/Home_section_2";
import Home_section_3 from "../components/Home_section_3";
const home = () => {
  return (
    <>
      <div>
       <Container>
       <Nav />
       </Container>
        <Home_first_section/>
        <Home_section_2/>
        <Home_section_3/>
      </div>
    </>
  );
};

export default home;
