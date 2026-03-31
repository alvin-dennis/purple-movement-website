import { Articles } from "./_components/Articles";
import { Contact } from "./_components/Contact";
import { CallToAction } from "./_components/CTA";
import { FAQ } from "./_components/FAQ";
import { Gallery } from "./_components/Gallery";
import { Hero } from "./_components/Hero";
import { Pyramid } from "./_components/Pyramid";
import { ScrollSection } from "./_components/ScrollSection";
import { Stats } from "./_components/Stats";
import { VisionMission } from "./_components/VisionMission";
import { Whypurple } from "./_components/Whypurple";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main className="w-full">
        <Hero />
        <VisionMission />
        <Whypurple />
        <Pyramid />
        <Gallery />
        <ScrollSection />
        <Stats />
        <Articles />
        <CallToAction />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
