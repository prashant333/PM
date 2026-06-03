import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Framework from "@/components/Framework";
import Initiatives from "@/components/Initiatives";
import Toolkit from "@/components/Toolkit";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Framework />
        <Initiatives />
        <Toolkit />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
