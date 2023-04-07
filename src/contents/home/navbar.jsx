import React from "react";
import Logo_svg from "@/src/assets/logo_svg";
import Link from "next/link";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";

const Nav = () => {
  return (
    <Container>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="pl-16 pt-6">
          {" "}
          <Logo_svg />
        </div>
        <div className="flex flex-col md:flex-row mt-9 md:mt-0 items-center gap-12">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="#">Products</Link>
          <Link href="/contact">Contact</Link>
          <Button btname="Sign in" path="/login" />
        </div>
      </div>
    </Container>
  );
};

export default Nav;
