import Nav from "@/src/contents/home/navbar";
import Hero from "@/src/contents/home/Hero";
import Section_B from "@/src/contents/home/Section_B";
import Section_C from "@/src/contents/home/Section_C";
import Footer from "../contents/home/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Section_B />
      <Section_C />
      <Footer />
    </div>
  );
}
