import React from "react";
import FigmaIcon from "../assets/skills/figma.svg";
import AdobeXDIcon from "../assets/skills/adobe-xd.svg";
import PhotoshopIcon from "../assets/skills/photoshop.svg";
import IllustratorIcon from "../assets/skills/illustrator.svg";
import PremiereIcon from "../assets/skills/premiere.svg";

const Skills = () => {
  const skills = [
    { skill: "Figma", percentage: 100, icon: FigmaIcon },
    { skill: "Adobe XD", percentage: 100, icon: AdobeXDIcon },
    { skill: "Adobe Photoshop", percentage: 85, icon: PhotoshopIcon },
    { skill: "Adobe Illustrator", percentage: 60, icon: IllustratorIcon },
    { skill: "Adobe Premiere", percentage: 70, icon: PremiereIcon },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-end gap-16">
          {skills.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-36 h-36 mb-4 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.skill}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500 mb-1">
                  {item.percentage}%
                </p>
                <p className="text-white font-medium text-base">{item.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
