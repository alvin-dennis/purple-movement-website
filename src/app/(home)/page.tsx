import { Articles } from "./_components/Articles";
import { Contact } from "./_components/Contact";
import { CallToAction } from "./_components/CTA";
import { Events } from "./_components/Events";
import { FAQ } from "./_components/FAQ";
import { Gallery } from "./_components/Gallery";
import { Hero } from "./_components/Hero";
import { Manifesto } from "./_components/Manifesto";
import { Pyramid } from "./_components/Pyramid";
import { Stats } from "./_components/Stats";
import { Timeline } from "./_components/Timeline";
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
        <Manifesto />
        <Timeline />
        <Events />
        <Stats />
        <Articles />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
    </div>
  );
}
