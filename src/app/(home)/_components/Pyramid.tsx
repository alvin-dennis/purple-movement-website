import { MotionSection } from "@/components/Framer";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import { PyramidClient } from "./PyramidChart";

export const Pyramid = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full flex justify-center items-center"
      id="pyramid"
    >
      <PyramidClient />
    </MotionSection>
  );
};
