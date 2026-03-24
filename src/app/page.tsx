import { Navbar, Footer } from "@/components/layout";
import { Hero, AboutIntro, ServicesSections, Products, Quote } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <ServicesSections />
        <Products />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
