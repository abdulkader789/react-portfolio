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
        <div className='top-0 md:h-screen-xl mb-10 h-full dark:bg-inherit max-w-screen-xl bg-[#fcfcdf] rounded-xl flex mx-auto shadow-md flex-col items-center md:flex-row  relative'>
            <div className=' flex flex-col items-center w-full box-shadow md:w-1/2 lg:mx-20 h-[450px] justify-center
            dark:text-white'>
                <h2 className=' md:text-4xl lg:text-5xl text-3xl _ProstoOne  w-full'>
                    <span className='dark:text-white text-bslack mb-2 inline-block'>Hello, I'm</span><br />
                    <span className='text-green-500'>Md. Abdul Kader</span>
                </h2>
                <div className='text-white w-full'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "A Web Developer",
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            "A YouTuber",
                            2000,
                            "A C++ Programmer",
                            2000,
                            "A Chess Lover",
                            2000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className='text-black dark:text-white block font-bold text-3xl  md:text-4xl'
                    />

                </div>
                <div className='flex w-full mt-5 div-btn'>

                    <button className="button-54 py-2 px-10 mr-5   uppercase btn-resume">
                        <a className='text-black dark:text-white text-sm font-bold relative top-0 tracking-normal hover:text-white'>resume < FaDownload className='relative inline' /></a>
                    </button>
                    <button className="button-54  mr-5 md:mr-0 py-2 px-10 relative uppercase  btn-hire" >
                        <a className='text-black dark:text-white text-sm font-bold relative top-0 tracking-normal hover:text-white'>hire me <FaArrowRight className='relative inline' /></a>
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