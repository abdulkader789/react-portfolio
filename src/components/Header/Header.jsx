import './Header.css'
// import { useState, useEffect } from 'react';
import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';



const Header = () => {

    return (
        <section className='lg:h-[85vh]'>
            <div className=' dark:bg-inherit text-center'>
                <div className='flex justify-center flex-col lg:flex-row lg:h-96 relative '>
                    <div className='lg:w-1/3 dark:text-white'>
                        <h2 className='uppercase _Poppins text-[10vw] md:text-[4vw]'>Hey,</h2>
                        <h2 className='uppercase _Poppins text-[10vw] md:text-[4vw]'>I'm ;)</h2>
                        <button className='hidden lg:block w-full mt-5 _Roboto_Mono py-1  border-black text-white bg-black dark:border-white uppercase  dark:text-black dark:bg-white border-2'>Projects</button>

                    </div>

                    <h2 className='uppercase relative lg:top-10  _Poppins text-center lg:w-1/3 dark:text-white text-[10vw] lg:text-[8vw]'>abdul<br /> kader</h2>
                    <div className='lg:w-1/3 relative top-1/2'>
                        <button className='w-full _Roboto_Mono py-1 dark:border-white dark:text-black dark:bg-white uppercase bg-black text-white border-black border-2 '>Resume</button>

                        <h2 className=' _Roboto_Mono text-sm md:text-xl lg:text-sm text-left my-5 dark:text-white'>
                            I'm a MERN stack developer from Dhaka.  With expertise in both front-end and back-end technologies, I create dynamic and responsive web applications. My skills include designing database schemas, developing server-side logic, and crafting interactive user interfaces.

                        </h2>
                        <button className='lg:hidden  w-full mb-5 _Roboto_Mono py-1  border-black dark:border-white uppercase text-white bg-black dark:bg-white  dark:text-black border-2'>Projects</button>

                        <div className='flex  w-full justify-evenly  dark:text-white'>
                            <FaLinkedin size={20} />
                            <FaYoutube size={20} />
                            <FaGithub size={20} />
                        </div>

                    </div>
                </div>
            </div >


        </section>
    );
};

export default Header;