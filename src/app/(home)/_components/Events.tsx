import Image from "next/image";
import { MotionDiv } from "@/components/Framer";
import { events } from "@/data/home";
import { containerVariants, fadeInUp, viewportConfig } from "@/lib/animations";

export const Events = () => {
  return (
    <section
      className="w-full py-20 sm:py-28 md:py-32 bg-transparent px-4 sm:px-6 relative overflow-hidden"
      id="events"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex items-center justify-center sm:justify-start gap-3 mb-4 md:mb-6"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                Kerala Stories
              </span>
            </MotionDiv>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 leading-[1.1] text-center sm:text-left">
              Lived <span className="text-tpm">Experiences</span>
            </h2>
            <p className="textforeground/50 text-base md:text-lg lg:text-xl leading-relaxed text-center sm:text-left">
              Our movement is rooted in real moments. These aren&apos;t just events; they are the
              heartbeat of a community rising together.
            </p>
          </div>
        </div>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[280px] lg:auto-rows-[320px]"
        >
          {events.map((event) => (
            <MotionDiv
              key={event.title}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/50 border borderforeground/5 min-h-[280px] sm:min-h-0 ${event.size}`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-3 py-1 bgforeground/10 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-3 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {event.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                    {event.title}
                  </h3>
                  <p className="textforeground/40 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border borderforeground/0 group-hover:borderforeground/10 rounded-[2rem] md:rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};
