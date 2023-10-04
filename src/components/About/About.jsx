import './About.css'
//import './About.scss'
import animationData from '../../Lottie/animation_developer1.json'
import Lottie from 'lottie-react';

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
const About = () => {
    const isLoading = useLoading();

    return (
        <div className='relative top-10'>

            {isLoading ? <Loader></Loader> :
                <section>
                    <div className="table-container" >
                        <h2 className='about-heading text-[#80FF80] font-[Montserrat] text-4xl sm:text-5xl capitalize text-center'>about me</h2>
                    </div>
                    <div className='flex w-full flex-col md:flex-row justify-center px-5'>

                        <div className='w-full md:w-1/2 about-container py-10'>

                            <h2 className='about-heading text-4xl sm:text-5xl'>Get to <span>know</span> me!</h2>
                            <p className='about-text text-lg sm:text-xl'>
                                Hi, my name is <span>Abdul Kader</span> and I am from Dhaka, Bangladesh.
                                I am a <span>MERN stack web developer</span> and a final year university student pursuing <span>B.Sc in CSE</span>. <br /><br />
                                I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
                                I am <span>open</span> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
                                <br />
                                Apart from coding I love to make video contents, you can check out some of my videos on Youtube </p>
                        </div>

                        <div className='w-full relative md:w-1/2 m-auto'>
                            <Lottie animationData={animationData} autoplay loop />
                        </div>

                    </div>
                </section>
            }
        </div>
    );
};

export default About;