import React from "react";
import PyramidChart from "./PyramidChart";

const Pyramid: React.FC = () => {
  return (
    <section className="bg-bg-dark text-gray-100 font-sans selection:bg-pyramid-p2 selection:text-white" id="pyramid">
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
        <div className="w-full bg-card-dark rounded-3xl shadow-glow p-6 md:p-12 border border-gray-800 min-h-[700px]">
          <PyramidChart />
        </div>
      </main>
    </section>
  );
};

export default Pyramid;
