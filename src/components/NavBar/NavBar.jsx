import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaFileAlt,
  FaBriefcase,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";

import "./NavBar.css";
import ThemeSwitcher from "../../utils/ThemeSwitcher";
const NavBar = () => {
  return (
    <div className=" fixed dark:bg-gray-800 bg-white lg:rounded-l-full mt-5  lg:rounded-r-full  h-14 md:h-20 bottom-0 md:top-0  z-10 dark:text-white w-full">
      <div className="flex h-full  w-full justify-center items-center">
        <div className="logo hidden lg:flex w-[20%] h-full justify-evenly items-center">
          <img
            className="w-10 relative left-0 top-0 h-10 rounded-full"
            src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"
            alt="logo"
          />

          <h2 className="text-center uppercase michroma-regular text-[14px] font-bold">
            abdul kader
          </h2>
        </div>
        <nav className="w-full h-full">
          <ul className="hidden md:flex h-full w-full text-[14px] justify-evenly items-center michroma-regular capitalize ">
            <li>
              <Link to="/" className="flex items-center justify-center">
                <FaHome className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center justify-center">
                <FaInfoCircle className="mr-1" /> About
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center justify-center">
                <FaFileAlt className="mr-1" /> Resume
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center justify-center">
                <FaBriefcase className="mr-1" /> Portfolio
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center justify-center">
                <FaEnvelope className="mr-1" /> Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="flex items-center justify-center">
                <FaBlog className="mr-1" /> Blog
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
          <ul className="flex md:hidden h-full w-full justify-evenly items-center capitalize">
            <li>
              <Link to="/" className="relative">
                <FaHome />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfoCircle />
              </Link>
            </li>
            <li>
              <Link>
                <FaFileAlt />
              </Link>
            </li>
            <li>
              <Link>
                <FaBriefcase />
              </Link>
            </li>
            <li>
              <Link>
                <FaEnvelope />
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <FaBlog />
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
