import React from "react";
import parvejImage from "../../assets/01.png";
import { LuImport } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <div className="text-white h-[90vh] flex flex-col md:flex-row w-full justify-between items-center p-8 md:p-20">
        <div className="my-auto md:w-2/4 md:pt-16">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-2">
              Parvej Vahora
            </span>
            , Frontend Developer
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg lg:text-2xl tracking-tighter mt-4 md:mt-8 lg:mt-16">
            I specialize in building modern and responsive web applications.
          </p>

          {/* Button Group */}
          <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-10">
            {/* Contact Me Button */}
            <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-green-400 to-blue-500">
              Contact Me
            </button>

            {/* Download Resume Button */}
            <a
              href="/MyResume.pdf"
              target="_blank"
              download
              className="inline-flex items-center justify-center text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-pink-500 to-yellow-500"
            >
              <span>Resume</span>
              <LuImport className="ml-2" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-2/4 flex justify-center items-center">
          <img
            className="w-full max-w-xs md:max-w-md max-h-[400px] object-cover rounded-lg mt-10"
            src={parvejImage}
            alt="Parvej Vahora"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
