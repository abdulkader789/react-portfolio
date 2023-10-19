import { Link } from 'react-router-dom';
// import ThemeSwitcher from '../../utils/ThemeSwitcher';
import {
    FaTwitter, FaGithubSquare, FaFacebookSquare, FaLinkedin, FaEnvelope, FaComment,
    FaHome, FaInfoCircle, FaLaptop, FaTools, FaBook, FaGlobe
} from 'react-icons/fa';

import './NavBar.css'
import { TypeAnimation } from 'react-type-animation';

import ThemeSwitcher from '../../utils/ThemeSwitcher';
const NavBar = () => {

    return (

        <div className='flex flex-col'>
            <h2 className='capitalize text-[65px] title   text-center'>abdul kader</h2>
            <p className='uppercase text-xl text-center sub-title '>Dhaka Based, CSE Graduate, Youtuber, love guiter, drawing & chess</p>
            <nav className='options uppercase flex justify-center'>
                <ul className='flex w-[800px] justify-evenly'>
                    <li>home</li>
                    <li>about</li>
                    <li>projects</li>
                    <li>hire me</li>

                </ul>
            </nav>
            <nav className='flex justify-center lg:py-2 h-full w-[600px] '>
                <ul className='w-full md:hidden  flex justify-evenly z-20  fixed   h-20 bottom-0   right-5 '>

                    <li>
                        <Link to="/home" className='Link '><FaHome className='fa-icon nav-btn' /> </Link>
                    </li>
                    <li>
                        <Link to="/about" className='Link'><FaInfoCircle className="fa-icon nav-btn" /> </Link>
                    </li>
                    <li>
                        <Link to="/project" className='Link'><FaLaptop className="fa-icon nav-btn" /> </Link>
                    </li>
                    <li>
                        <Link to="/skill" className='Link'><FaTools className="fa-icon nav-btn" /> </Link>
                    </li>
                    <li>
                        <Link to="/blog" className='Link'><FaBook className="fa-icon nav-btn " /></Link>
                    </li>
                    <li>
                        <Link to="/contact" className='Link'><FaEnvelope className="fa-icon nav-btn" /> </Link>
                    </li >

                </ul>
            </nav >

        </div >
    );
};



export default NavBar;