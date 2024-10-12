import { div } from "framer-motion/client";
import React from "react";

const Exp = [
  {
    company: "Bit Infotech",
    role: "Frontend Developer",
    year: "02/2024 to 08/2024",
    description:"Implemented user interfaces for web applications using React and Redux,Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers.Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

const Experience = () => {
  return (
    <>
      <section className="m-10" id="Experience">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-6 text-center ">
          Wor Experience
        </h2>
        <div className="mx-auto mt-10  max-w-6xl">
          {Exp.map((Exp, id) => (
            <div key={id} className="mx-4 mb-20">
              <h2 className="font-medium lg:text-2xl text-white ">
                {Exp.company}
              </h2>

              <div className="flex justify-between">
                <p className="py-4 tracking-wide lg:text-xl text-white">
                  {Exp.role}
                </p>
                <p className="text-white py-4 lg:text-xl">{Exp.year}</p>
              </div>
              <p className="text-white py-4 lg:text-xl">{Exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
