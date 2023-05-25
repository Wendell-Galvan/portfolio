import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useOutsideClick from "../hooks.js/useOutsideClick";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      <div className="visible sm:hidden flex">
        <button ref={ref}>
          {isOpen ? (
            <FaBars
              className="h-10 w-10 fill-emerald-700 rotate-90"
              onClick={handleClick}
            />
          ) : (
            <FaBars
              className="h-10 w-10 fill-emerald-700 hover:rotate-90"
              onClick={handleClick}
            />
          )}
        </button>
        <div>
          <ul className={`${isOpen ? "visible pl-2" : "hidden"}`}>
            <li>
              {location.pathname === "/projects" ? (
                <HashLink
                  to="/#home"
                  className="text-emerald-500 hover:text-white hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Home
                </HashLink>
              ) : (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-emerald-500 hover:text-white hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Home
                </ScrollLink>
              )}
            </li>
            <li>
              <Link
                to="/projects"
                className=" text-emerald-500 hover:text-white"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li>
              {location.pathname === "/projects" ? (
                <HashLink
                  to="/#about"
                  className="text-emerald-500 hover:text-white hover:cursor-pointer"
                  onClick={handleClick}
                >
                  About
                </HashLink>
              ) : (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-emerald-500 hover:text-white hover:cursor-pointer"
                  onClick={handleClick}
                >
                  About
                </ScrollLink>
              )}
            </li>
            <li>
              {location.pathname === "/projects" ? (
                <HashLink
                  to="/#contact"
                  className="text-emerald-500 hover:text-white hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Contact
                </HashLink>
              ) : (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-emerald-500 hover:text-white hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Contact
                </ScrollLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
