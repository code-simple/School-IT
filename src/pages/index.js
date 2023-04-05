import Nav from "@/src/components/navbar";
import Hero from "@/src/components/Hero";
import Section_B from "@/src/components/Section_B";
import Section_C from "@/src/components/Section_C";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero />
      <Section_B />
      <Section_C />
      <Footer/>
    </div>
  );
}
