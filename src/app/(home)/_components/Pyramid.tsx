import type React from "react";
import { PyramidClient } from "./PyramidChart";

export const Pyramid: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center" id="pyramid">
      <PyramidClient />
    </section>
  );
};
