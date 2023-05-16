import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { TbHexagonLetterW } from "react-icons/tb";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="sticky top-0 z-30 flex flex-wrap items-center justify-between px-2 pt-3 pb-4 bg-stone-900 border-b-2 border-emerald-400">
        <div className="container mx-auto flex font-montserrat">
          <Dropdown />
          <div className="mx-auto">
            <div className="flex invisible sm:visible  text-emerald-500 pt-2 text-lg space-x-6">
              {location.pathname === "/projects" ? (
                <HashLink
                  to="/#home"
                  className="underline underline-offset-8 hover:text-white hover:border-2"
                >
                  Home
                </HashLink>
              ) : (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="underline underline-offset-8 hover:text-white hover:border-2 hover:cursor-pointer"
                >
                  Home
                </ScrollLink>
              )}
              {location.pathname === "/projects" ? (
                <HashLink
                  to="/#about"
                  className="underline underline-offset-8 hover:text-white hover:border-2"
                >
                  About
                </HashLink>
              ) : (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="underline underline-offset-8 hover:text-white hover:border-2 hover:cursor-pointer"
                >
                  About
                </ScrollLink>
              )}
              <TbHexagonLetterW className="text-emerald-500 text-2xl" />
              {location.pathname === "/projects" ? (
                <HashLink
                  to="/#contact"
                  className="underline underline-offset-8 hover:text-white hover:border-2"
                >
                  Contact
                </HashLink>
              ) : (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="underline underline-offset-8 hover:text-white hover:border-2 hover:cursor-pointer"
                >
                  Contact
                </ScrollLink>
              )}
              <Link
                to="/projects"
                className=" underline underline-offset-8 hover:text-white hover:border-2"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
