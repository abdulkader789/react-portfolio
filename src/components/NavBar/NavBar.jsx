import { NavLink } from 'react-router-dom';
// import ThemeSwitcher from '../../utils/ThemeSwitcher';
import {
    FaTwitter, FaGithubSquare, FaFacebookSquare, FaLinkedin, FaEnvelope, FaComment,
    FaHome, FaInfoCircle, FaLaptop, FaTools, FaBook, FaGlobe
} from 'react-icons/fa';

import './NavBar.css'
import ThemeSwitcher from '../../utils/ThemeSwitcher';
const NavBar = () => {

    return (
        <div className='w-full md:sticky md:top-0 md:z-20 h-16'>
            <nav className='flex justify-center w-full h-14'>

                <ul className='w-full flex justify-evenly z-20 lg:z-auto fixed  lg:relative h-20 bottom-0 lg:top-2 lg:h-full right-5 lg:right-auto'>

                    <li>
                        <NavLink to="/home" className='NavLink '><FaHome className='fa-icon nav-btn' /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='NavLink'><FaInfoCircle className="fa-icon nav-btn" /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className='NavLink'><FaLaptop className="fa-icon nav-btn" /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skill" className='NavLink'><FaTools className="fa-icon nav-btn" /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className='NavLink'><FaBook className="fa-icon nav-btn " /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='NavLink'><FaEnvelope className="fa-icon nav-btn" /> </NavLink>
                    </li >
                </ul>
                <div className='relative w-full h-full top-3 flex justify-center items-center dark:top-5 mx-auto'>
                    <NavLink to="/home">
                        <div className='flex dark:hidden'>
                            <h2 className='text-[#0f0f0f] text-3xl font-bold'>Abdul Kader</h2>
                        </div>
                        <div className="title-container hidden dark:block">
                            <h1 className='title text-black'>Abdul Kader</h1>
                            <h1 className='small-title'>Abdul Kader</h1>
                        </div>

                    </NavLink>
                </div>
                <div className="icon-container flex w-full justify-evenly items-center relative ">
                    <div className='lg:hidden bg-gray-700 text-white px-4 py-2 rounded-full'>
                        <FaGlobe></FaGlobe>
                    </div>

                    <div className='hidden lg:flex w-full justify-evenly items-center'>
                        <FaTwitter className="fa-icon nav-social" />
                        <FaGithubSquare className="fa-icon nav-social" />
                        <FaFacebookSquare className="fa-icon nav-social" />
                        <FaLinkedin className="fa-icon nav-social" />
                        <FaEnvelope className="fa-icon nav-social" />
                        <FaComment className="fa-icon nav-social" />
                    </div>

                    <div className='relative w-16 top-1'>
                        <ThemeSwitcher></ThemeSwitcher>
                    </div>
                </div>
            </nav>
        </div>
    );
};



export default NavBar;