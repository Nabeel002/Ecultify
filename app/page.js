import Image from "next/image";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import MediaSection from "./components/MediaSection";
import TestimonialSection from "./components/TestimonialSection";
import ContentSection from "./components/ContentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={`container`}>
        <SubHero />
        <MediaSection/>
        <TestimonialSection/>
        <ContentSection/>
      </main>
    </>
  );
}
