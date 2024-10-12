import { div, source, title } from "framer-motion/client";
import React from "react";
import gmailClone from "../../assets/02.AVIF";
import sideBar from "../../assets/03.png";
import selfBiodata from "../../assets/06.jpg";
import EBooks from "../../assets/04.AVIF";
import ContactUsImages from "../../assets/05.png"

const project = [
  {
    title: "Gmail Clone",
    imageSrc: gmailClone,
    Skills: "HTML & CSS",
    demo: "https://vhoraparvej999.github.io/gmail-clone/",
    source: "https://github.com/vhoraparvej999/gmail-clone",
  },
  {
    title: "SideBar",
    imageSrc: sideBar,
    Skills: "HTML, CSS & Javascript",
    demo: "https://vhoraparvej999.github.io/02Sidebar/",
    source: "https://github.com/vhoraparvej999/02Sidebar?tab=readme-ov-file",
  },
  {
    title: "Self Biodata",
    imageSrc: selfBiodata,
    Skills: "ReactJs & Tailwind CSS",
    demo: "https://vhoraparvej999.github.io/self-baiodata/",
    source: "https://github.com/vhoraparvej999/self-baiodata",
  },
  {
    title: "Contact us reactjs",
    imageSrc: ContactUsImages,
    Skills: "ReactJs, CSS & Firebase Storage Data",
    demo: "https://vhoraparvej999.github.io/contact_us_reactjs/",
    source: "https://github.com/vhoraparvej999/contact_us_reactjs/tree/main",
  },
  {
    title: "E_Books",
    imageSrc: EBooks,
    Skills: "ReactJs & Tailwind CSS",
    demo: "https://vhoraparvej999.github.io/E-books/",
    source: "https://github.com/vhoraparvej999/E-books?tab=readme-ov-file",
  }
];

const Projects = () => {
  return (
    <>
      <section className="py-12 bg-gray-100" id="Projects">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-16 text-center  ">
            Projects
          </h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {project.map((project, id) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.imageSrc}
                  alt={`Image of ${project.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.Skills}</p>
                  <div className="flex justify-between items-center">

                  <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-green-400 to-blue-500">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    </button>
                    <a
                      href={project.source}
                      className="inline-flex items-center justify-center text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-pink-500 to-yellow-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
