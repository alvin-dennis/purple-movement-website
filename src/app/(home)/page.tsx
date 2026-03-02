import { Hero } from "./_components/Hero";
import { VisionMission } from "./_components/VisionMission";
import Pyramid from "./_components/Pyramid";
import { Manifesto } from "./_components/Manifesto";
import { Events } from "./_components/Events";
import { FAQ } from "./_components/FAQ";
import { Contact } from "./_components/Contact";
import { CallToAction } from "./_components/CallToAction";
import { Whypurple } from "./_components/Whypurple";
import { CommunityMosaic } from "./_components/CommunityMosaic";
import { LivingTimeline } from "./_components/LivingTimeline";
import { ResourcesSection } from "./_components/ResourcesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main className="w-full">
        <Hero />
        <VisionMission />
        <Whypurple />
        <CommunityMosaic />
        <LivingTimeline />
        <Pyramid />
        <Manifesto />
        <Events />
        <ResourcesSection />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
    </div>
  );
}
