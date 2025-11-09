import React from "react";
import bg from "../assets/Photo1.png";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import DribbbleIcon from "../assets/icons/dribbble.svg";
import BehanceIcon from "../assets/icons/behance.svg";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-400 mb-2">Hi I am</p>
            <p className="text-2xl font-semibold text-white mb-2">
              Mahmood Fazile
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="text-orange-500">UI/UX designer</span>
            </h1>
            <div className="flex flex-row items-end gap-5 py-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={DribbbleIcon} alt="Dribbble" className="w-8 h-8" />
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={BehanceIcon} alt="Behance" className="w-8 h-8" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition text-center"
              >
                Hire Me
              </a>
              <a
                href="/Mahmood_Fazile_CV.pdf"
                download="Mahmood_Fazile_CV.pdf"
                className="border-2 border-white text-white px-8 py-3 rounded hover:bg-orange-500 hover:text-white transition text-center"
              >
                Download CV
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-4 bg-zinc-900 p-4 sm:p-6 rounded-lg w-full sm:w-fit">
              <div className="text-center px-2 sm:px-4 w-full sm:w-auto">
                <h3 className="text-3xl sm:text-[40px] font-extrabold text-[#FD6F00] mb-1 sm:mb-2">
                  5+
                </h3>
                <p className="text-white text-sm sm:text-base font-semibold">
                  Experiences
                </p>
              </div>
              <div className="hidden sm:block w-[1px] h-20 bg-white/20"></div>
              <div className="block sm:hidden w-full h-[1px] bg-white/20"></div>

              <div className="text-center px-2 sm:px-4 w-full sm:w-auto">
                <h3 className="text-3xl sm:text-[40px] font-extrabold text-[#FD6F00] mb-1 sm:mb-2">
                  20+
                </h3>
                <p className="text-white text-sm sm:text-base font-semibold">
                  Project done
                </p>
              </div>
              <div className="hidden sm:block w-[1px] h-20 bg-white/20"></div>
              <div className="block sm:hidden w-full h-[1px] bg-white/20"></div>

              <div className="text-center px-2 sm:px-4 w-full sm:w-auto">
                <h3 className="text-3xl sm:text-[40px] font-extrabold text-[#FD6F00] mb-1 sm:mb-2">
                  80+
                </h3>
                <p className="text-white text-sm sm:text-base font-semibold">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-[300px] h-[400px] sm:w-[420px] sm:h-[550px] lg:w-[520px] lg:h-[650px] mx-auto flex items-center justify-center">
              <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-zinc-900 bottom-0 left-0"></div>
              <img
                src={bg}
                alt="Mahmood Fazile"
                className="absolute w-[255px] h-[400px] sm:w-[357px] sm:h-[550px] lg:w-[440px] lg:h-[650px] top-0 left-1/2 -translate-x-1/2 object-cover grayscale z-10 rounded-[120px] sm:rounded-[165px] lg:rounded-[206px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
