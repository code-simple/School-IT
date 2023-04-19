import Nav from "@/src/contents/home/Navbar_Home";
import Hero from "@/src/contents/home/Hero";
import Section_B from "@/src/contents/home/Section_B";
import Section_C from "@/src/contents/home/Section_C";
import Footer from "@/src/contents/home/Footer";
import CheckLogin from "@/src/components/CheckLogin";

const HomeComponent = () => {
  return (
    // Checks whether use is logged in
    <CheckLogin>
      <div>
        <Nav />
        <Hero />
        <Section_B />
        <Section_C />
        <Footer />
      </div>
    </CheckLogin>
  );
};

export default HomeComponent;
