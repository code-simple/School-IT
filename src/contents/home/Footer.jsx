import React from "react";
import Logo_svg from "@/src/assets/logo_svg";
import Container from "@/src/components/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-3 mt-20">
        <div className="flex justify-center align-middle pb-8 sm:pb-0">
          <Logo_svg />
        </div>
        <div className="inline-flex flex-col justify-center text-center gap-6 text-2xl text-lightred">
          <h1 className="text-black">Legal</h1>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>

        <div className="inline-flex flex-col justify-center text-center gap-6 text-2xl text-lightred ">
          <h1>Contact Us</h1>
          <Link href="#">contact@schoolit.com</Link>
          <Link href="#">+234-8050715616</Link>
        </div>
      </div>
      <div className="flex justify-center mt-32 mb-4">
        <p>Copyright @ schoolIT, 2019</p>
      </div>
    </Container>
  );
};

export default Footer;
