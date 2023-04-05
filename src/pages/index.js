import Nav from "@/src/components/navbar";
import Container from "@/src/components/Container";
import Hero from "@/src/components/Hero";
import Section_B from "@/src/components/Section_B";
import Section_C from "@/src/components/Section_C";

export default function Home() {
  return (
    <div>
      <Container>
        <Nav />
      </Container>
      <Hero />
      <Section_B />
      <Section_C />
    </div>
  );
}
