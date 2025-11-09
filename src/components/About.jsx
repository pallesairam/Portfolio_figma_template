import React from "react";
import download from "../assets/icons/download.svg";
import bg from "../assets/Photo1.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-400 mb-12">
          User Interface And User Experience And Also Video Editing
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[400px] sm:w-[340px] sm:h-[485px] lg:w-[400px] lg:h-[570px]">
              <div
                className="absolute w-[259px] h-[335px] left-[10px] top-[65px] sm:w-[315px] sm:h-[407px] sm:left-[12px] sm:top-[78px] lg:w-[370px] lg:h-[478px] lg:left-[15px] lg:top-[92px] bg-zinc-900 rounded-t-[130px] sm:rounded-t-[157px] lg:rounded-t-[185px]"
                style={{
                  borderBottomLeftRadius: "6px",
                  borderBottomRightRadius: "6px",
                }}
              ></div>
              <img
                src={bg}
                alt="About Mahmood Fazile"
                className="absolute w-[280px] h-[400px] sm:w-[340px] sm:h-[485px] lg:w-[400px] lg:h-[570px] left-0 top-0 object-cover grayscale z-10"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-4 text-justify leading-relaxed">
              A software engineer, the modern-day architect of digital realms,
              navigates the ethereal landscapes of code, sculpting intangible
              structures that shape our technological world. With fingers poised
              over keyboards like virtuoso pianists, they compose symphonies of
              logic, their minds a labyrinth of algorithms and solutions.Their
              canvas is a screen, a vast expanse where lines of code dance in
              intricate patterns, weaving the fabric of programs and
              applications. Each keystroke is a brushstroke, crafting intricate
              architectures and breathing life into innovative designs.In this
              digital atelier, they don the mantle of problem solvers,
              confronting bugs and glitches like valiant knights in an ever-
              evolving quest for perfection. Debugging becomes a noble pursuit,
              unraveling the mysteries hidden within the tangled webs of code.
              designs.In this digital atelier.
            </p>
            <a
              href="/Mahmood_Fazile_CV.pdf"
              download="Mahmood_Fazile_CV.pdf"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-7 py-2 rounded-lg hover:bg-orange-600   "
            >
              <img
                src={download}
                alt="Download"
                className="w-5 h-5 object-contain"
              />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
