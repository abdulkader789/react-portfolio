import './Header.css'
// import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Lottie/animation_developer3.json'
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

// const WelcomeText = () => {
//     return (
//         <div className="text-center neon uppercase relative text-4xl sm:text-7xl flex justify-center items-center">
//             Welcome<br></br>to-my
//             <br />
//             portfolio
//         </div>
//     )
// }

const Header = () => {

    return (
        <div className='flex h-[90vh] flex-col justify-center items-center md:flex-row'>
            <div className='w-full relative box-shadow h-full md:w-1/2 '>
                <h2 className=' md:text-4xl lg:text-5xl text-3xl _ProstoOne'>
                    <span className='dark:text-white mb-2 inline-block'>Hello, I'm</span><br />
                    <span className='text-green-500'>Md. Abdul Kader</span>
                </h2>
                <div className='text-white'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "A Web Developer",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "A YouTuber",
                            1000,
                            "A C++ Programmer",
                            1000,
                            "A Chess Lover",
                            1000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className='text-black dark:text-white block font-bold text-4xl'
                    />

                </div>
                <div className='button-div w-full flex  relative'>


                    <button className="button-54 h-20 uppercase btn-resume md:mr-10 ">
                        <Link className='inline relative'>
                            resume <FaDownload className='inline btn-icon' />
                        </Link>
                    </button>



                    <button className="button-54 uppercase btn-hire" >
                        hire me <FaArrowRight className='inline btn-icon' />
                    </button>

                </div>

            </div>

            <div className='w-full flex justify-center h-full relative md:w-1/2 '>
                <Lottie animationData={animationData} autoplay loop />
            </div>

        </div >
    );
};

export default Header;