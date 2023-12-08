import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-col items-center pt-40 bg-stone-900 text-emerald-500 h-screen">
      <h1 className="flex justify-center font-rampart text-2xl mb-5 text-emerald-500">
        About Me
      </h1>
      <div className="font-montserrat flex flex-col md:flex-row items-center p-6 md:w-2/3  shadow-lg rounded-lg overflow-hidden w-full max-w-screen-md">
        <p>
          I am a Front End Developer specializing in <b>JavaScript</b> and{" "}
          <b>React</b>. My interest in coding began in 2015 when I designed a
          mobile application to improve health outcomes in physical therapy.
          After working in physical therapy the last 8 years, I decided to
          pursue that interest and it quickly became a passion. In the past year
          I have learned to code through ROOTs Technology's online progam and am
          continuing to learn on my own. Since then I have developed fully
          functional applications utilizing my newfound skills. Take a look at
          some of my{" "}
          <Link to="/projects" className="font-bold hover:text-white">
            projects
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
