import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    icon: <FaHtml5 size={80} className="text-red-600" />,
    description: "HTML",
  },
  {
    icon: <FaCss3Alt size={80} className="text-blue-600" />,
    description: "CSS",
  },
  {
    icon: <FaBootstrap size={80} className="text-purple-600" />,
    description: "Bootstrap",
  },
  {
    icon: <RiTailwindCssFill size={80} className="text-teal-400" />,
    description: "TailWindCss",
  },
  {
    icon: <FaJs size={80} className="text-yellow-500" />,
    description: "JavaScript",
  },
  {
    icon: <FaReact size={80} className="text-blue-400" />,
    description: "React",
  },
  {
    icon: <FaGit size={80} className="text-orange-500" />,
    description: "Git",
  },
  {
    icon: <FaGithub size={80} className="text-gray-900" />,
    description: "GitHub",
  },
  {
    icon: <MdOutlineDesignServices size={80} className="text-indigo-500" />,
    description: "Material UI",
  },
  {
    icon: <FaFigma size={80} className="text-purple-500" />,
    description: "Figma",
  },
];

const SkillCard = ({ icon, description }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg text-white hover:bg-gray-700 transition duration-300 ease-in-out">
      {/* Skill Icon */}
      {icon}

      {/* Description */}
      <span className="mt-2 text-sm md:text-lg lg:text-xl font-semibold">
        {description}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="p-6 md:p-10 lg:p-20">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
        Skills
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
