import { Separator } from "@/components/ui/separator";
import { vision } from "@/data/home";

export const VisionMission = () => {
  return (
    <section
      id="about"
      aria-label="Vision and Mission Section"
      className="flex flex-col md:flex-row items-center justify-center gap-12 mt-5 px-4 sm:px-6 md:px-12 lg:px-20 md:py-16"
    >
      <div className="flex flex-col items-start w-full max-w-xl text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize">
          Our {vision.vision.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-poppins text-justify md:text-left">
          {vision.vision.text}
        </p>
      </div>
      <Separator orientation="vertical" className="hidden md:block w-px h-10 bg-tpm" />
      <Separator orientation="vertical" className="block md:hidden w-24 sm:w-36 h-px bg-tpm" />
      <div className="flex flex-col items-start md:items-end w-full max-w-xl text-left md:text-right">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize">Our Purpose</h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-poppins text-justify md:text-right">
          {vision.mission.text}
        </p>
      </div>
    </section>
  );
};
