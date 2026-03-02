import dynamic from "next/dynamic";

import { Hero } from "./_components/Hero";
import { VisionMission } from "./_components/VisionMission";
import { Whypurple } from "./_components/Whypurple";

const Gallery = dynamic(() =>
  import("./_components/Gallery").then(
    (mod) => mod.Gallery
  )
);

const Timeline = dynamic(
  () =>
    import("./_components/Timeline").then(
      (mod) => mod.Timeline
    ),
);

const Pyramid = dynamic(() => import("./_components/Pyramid"));

const Manifesto = dynamic(() =>
  import("./_components/Manifesto").then((mod) => mod.Manifesto)
);

const Events = dynamic(
  () =>
    import("./_components/Events").then((mod) => mod.Events),
);

const Articles = dynamic(
  () =>
    import("./_components/Articles").then(
      (mod) => mod.Articles
    ),
);

const FAQ = dynamic(() =>
  import("./_components/FAQ").then((mod) => mod.FAQ)
);

const Contact = dynamic(() =>
  import("./_components/Contact").then((mod) => mod.Contact)
);

const CallToAction = dynamic(() =>
  import("./_components/CTA").then(
    (mod) => mod.CallToAction
  )
);

export default async function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main className="w-full">
        <Hero />
        <VisionMission />
        <Whypurple />
        <Gallery />
        <Timeline />
        <Pyramid />
        <Manifesto />
        <Events />
        <Articles />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
    </div>
  );
}