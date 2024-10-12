import React from "react";
import AboutImage from "../../assets/08.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div
        className="text-white md:flex overflow-hidden items-center md:justify-center bg-black shadow-lg m-0 md:mx-10 lg:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 lg:p-20"
        id="About"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          {/* Image */}
          <img
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-3xl"
            src={AboutImage}
            alt="About Parvej Vahora"
          />

          {/* Content Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left font-Mochiy Pop One mb-6">
              About Me
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <IoArrowForward size={30} className="mt-1" />

                <div>
                  <h1 className="text-xl md:text-2xl font-semibold leading-tight">
                    Frontend Developer
                  </h1>
                  <p className="text-sm md:text-md lg:text-lg leading-tight mt-2">
                    I have more than 0-2 years of experience. Currently, I'm
                    looking for a new role with React.js. I have good knowledge
                    about React Components, JSX, React Hooks, and React Routing.
                  </p>

                  {/* Responsive List */}
                  <ul className="mt-4 space-y-2 px-2">
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Name:</span>
                      <span>Parvej Vahora</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Job Role:</span>
                      <span>Frontend Developer</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Experience:</span>
                      <span>Six Month Internship</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Profile:</span>
                      <span>Frontend Developer</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Languages:</span>
                      <span>Hindi, English & Gujarati</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Education:</span>
                      <span>Bachelor of Computer Application (BCA)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Other Skills:</span>
                      <span>Visual Studio, Photoshop & Dreamweaver</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-semibold">Interests:</span>
                      <span>Traveling, Travel Photography, Teaching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
