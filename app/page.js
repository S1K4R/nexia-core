import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Phases from "@/components/Phases";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Phases />
        <Results />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
