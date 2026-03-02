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
    <div className="min-h-screen bg-[#020205] text-white premium-noise overflow-hidden">
      {/* Global Background Glows */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-[-5%] w-[30%] h-[40%] bg-purple-900/5 blur-[120px] rounded-full" />
      </div>
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
