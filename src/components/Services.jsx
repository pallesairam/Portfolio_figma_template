import React from "react";
import LogoText from "../assets/User.svg";

const Services = () => {
  const services = [
    "App Design",
    "App Design",
    "App Design",
    "App Design",
    "App Design",
    "App Design",
  ];

  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Services
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-gray-700 p-8 rounded-lg hover:border-orange-500 active:border-orange-500 focus:border-orange-500 transition text-center cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={LogoText}
                  alt="App Design"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                {service}
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit
                amet consectetur
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
