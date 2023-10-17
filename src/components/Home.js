import React from "react";
import avatar from "../images/avatar.jpg";
import HTML from "../images/HTML.png";
import JS from "../images/JS.png";
import css from "../images/css.png";
import react from "../images/react.png";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function Home() {
  return (
    <div
      id="home"
      className="bg-stone-900 
    h-full  py-20"
    >
      <div className="flex flex-col items-center pb-20">
        <h2 className="font-shantell text-xl sm:text-2xl text-emerald-500">
          Hi, I'm
        </h2>
        <h1 className="font-rampart text-4xl sm:text-6xl text-emerald-700 pt-2 pb-5">
          Wendell
        </h1>
        <h2 className="font-shantell text-xl sm:text-2xl text-emerald-500">
          Front End Developer
        </h2>
      </div>
      <div className="flex justify-evenly font-shantell text-3xl text-emerald-500">
        <motion.img
          src={avatar}
          alt="profile"
          className="rounded-full h-1/2 w-1/2 md:h-1/4 md:w-1/4 shadow-2xl shadow-emerald-800"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <div className="hidden md:visible md:flex md:items-center">
          <div className="grid bg-opacity-20 ml-20 bg-emerald-600 border border-transparent rounded-3xl">
            <img
              className="m-5 h-12 w-12 lg:h-20 lg:w-20"
              src={HTML}
              alt="HTML"
            ></img>
            <img
              className="m-5 h-12 w-12 lg:h-20 lg:w-20"
              src={css}
              alt="CSS"
            ></img>
            <img
              className="m-5 h-12 w-12 lg:h-20 lg:w-20"
              src={JS}
              alt="JavaScript"
            ></img>
            <img
              className="m-5 h-12 w-12 lg:h-20 lg:w-20"
              src={react}
              alt="React"
            ></img>
          </div>
          <h1 className="rotate-90 pt-20">Technologies</h1>
        </div>
      </div>
      <h1 className="pt-20 flex justify-center font-shantell text-xl sm:text-4xl text-emerald-500 md:hidden">
        Technologies
      </h1>
      <div className="pt-5 flex justify-center md:hidden">
        <div className="flex justify-center items-center bg-opacity-30 bg-emerald-600 border border-transparent rounded-3xl">
          <img className="m-2 h-12 w-12" src={HTML} alt="HTML"></img>
          <img className="m-2 h-12 w-12" src={css} alt="CSS"></img>
          <img className="m-2 h-12 w-12" src={JS} alt="JavaScript"></img>
          <img className="m-2 h-12 w-12" src={react} alt="React"></img>
        </div>
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div className="flex justify-center text-3xl text-emerald-500">
        <a
          href="https://www.linkedin.com/in/wendell-galvan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="m-2" />
        </a>
        <a
          href="https://github.com/Wendell-Galvan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="m-2" />
        </a>
      </div>
      <div className="flex justify-center text-white">
        Copyright © 2023 Wendell Galvan
      </div>
    </div>
  );
}

export default Home;
