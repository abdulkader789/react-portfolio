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
        <div className='w-full md:sticky md:top-0 md:z-20 h-14'>
            <nav className='flex justify-center w-full h-14'>

                <ul className='w-full flex justify-evenly z-20 lg:z-auto fixed  lg:relative h-20 bottom-0 lg:top-2 lg:h-full right-5 lg:right-auto'>

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



                <div className=" w-full flex justify-evenly relative top-1">
                    {/* <h2 className=' nav-title  border-black dark:border-white'>
                        <Link to="/home" className=' rounded-xl text-black dark:text-white  relative top-0 text-center'>
                            <span className='full-text '>Abdul Kader</span>
                            <span className='short-text hidden'>AB</span>

                        </Link>
                    </h2> */}
                    <h2 className=' text-black dark:text-white block font-bold text-3xl  md:text-4xl'>

                        <span>&#123;</span>
                        <TypeAnimation
                            sequence={[
                                "A",
                                1000,
                                "B",
                                1000,
                                "D",
                                1000,
                                "U",
                                1000,
                                "L",
                                1000,
                                "K",
                                1000,
                                "A",
                                1000,
                                "D",
                                1000,
                                "E",
                                1000,
                                "R",
                                1000,

                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            className=''
                        />
                        <span>&#125;</span>
                    </h2>
                </div>

                <div className=" w-full hidden md:flex  justify-evenly items-center relative">

                    {/* <a className='relative top-0'><FaTwitter className="fa-icon nav-social" /></a> */}
                    <a className='relative top-0'><FaGithubSquare className="fa-icon nav-social" /></a>
                    <a className='relative top-0'><FaFacebookSquare className="fa-icon nav-social" /></a>
                    <a className='relative top-0'><FaLinkedin className="fa-icon nav-social" /></a>
                    <a className='relative top-0'><FaEnvelope className="fa-icon nav-social" /></a>
                    <a className='relative top-0'><FaComment className="fa-icon nav-social" /></a>

                </div>

                <div className='relative flex items-center justify-center mt-1 w-60'>
                    <ThemeSwitcher></ThemeSwitcher>
                </div>

            </nav >
        </div >
    );
};



export default NavBar;