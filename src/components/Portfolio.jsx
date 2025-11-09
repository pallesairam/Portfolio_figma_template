import React, { useState } from "react";
import project1 from "../assets/Frame_1.png";
import project2 from "../assets/Frame_2.png";
import project3 from "../assets/Frame_3.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    { image: project1, name: "E-commerce Website", category: "Website Design" },
    {
      image: project2,
      name: "Mobile Banking App",
      category: "App Mobile Design",
    },
    { image: project3, name: "Dashboard Design", category: "App Desktop" },
    {
      image: project2,
      name: "Fitness Tracker App",
      category: "App Mobile Design",
    },
    { image: project1, name: "Corporate Website", category: "Website Design" },
    {
      image: project3,
      name: "Project Management Tool",
      category: "App Desktop",
    },
    { image: project1, name: "Portfolio Website", category: "Website Design" },
    { image: project3, name: "Analytics Dashboard", category: "App Desktop" },
    {
      image: project2,
      name: "Social Media App",
      category: "App Mobile Design",
    },
  ];

  const filters = [
    "All",
    "Website Design",
    "App Mobile Design",
    "App Desktop",
    "Braiding",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Portfolio
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded transition ${
                activeFilter === filter
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-800 text-gray-400 hover:border-orange-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {filteredItems.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p className="text-lg sm:text-xl">
              No projects found under{" "}
              <span className="text-orange-500 font-semibold">
                {activeFilter}
              </span>{" "}
              category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-zinc-800 aspect-[4/3] cursor-pointer transition-all duration-1000 hover:shadow-2xl hover:shadow-orange-500/20 active:shadow-2xl active:shadow-orange-500/20 touch-manipulation"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-active:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-zinc-800 border-t border-gray-700 group-hover:border-orange-500 group-active:border-orange-500 px-4 py-3 flex justify-between items-center transition-all duration-300">
                  <h4 className="text-white text-sm font-semibold group-hover:text-orange-500 group-active:text-orange-500 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-xs group-hover:text-gray-200 group-active:text-gray-200 transition-colors duration-300">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
