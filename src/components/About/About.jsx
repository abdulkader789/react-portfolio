import "./About.css";
//import './About.scss'
import animationData from "../../Lottie/animation_developer1.json";
import Lottie from "lottie-react";

import { useLoading } from "../Loader/useLoading";
import Loader from "../Loader/Loader";
const About = () => {
  const isLoading = useLoading();

  return (
    <div className=" pt-10  shadow-md  bg-[#ebfedf] dark:bg-inherit rounded-xl mb-10 ">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <section className="about-container">
          <h2 className="about-heading text-2xl text-center lg:text-4xl">
            Get to <span>know</span> me!
          </h2>
          <div className="flex w-full flex-col-reverse  md:flex-row justify-center py-5 px-3 lg:px-5 text-black dark:text-white">
            <div className="w-full md:w-1/2 about-container ">
              <p className="about-text text-sm lg:text-xl">
                Hi, my name is <span>Abdul Kader</span> and I am from Dhaka,
                Bangladesh. I am a <span>MERN stack web developer</span> and a
                final year university student pursuing <span>B.Sc in CSE</span>.{" "}
                <br /> <br className="hidden lg:block" />
                I love to create original projects with beautiful designs, you
                can check out some of my work in the projects section.
                <br className="hidden lg:block" />
                <br />I am <span>open</span> to new collaborations or work where
                I can contribute and grow. Feel free to connect with me, links
                are in the footer.
                <br />
                <br className="hidden lg:block" />
                Apart from coding I love to make video contents, you can check
                out some of my videos on Youtube{" "}
              </p>
            </div>

            <div className="w-full relative md:w-1/2 m-auto">
              <Lottie animationData={animationData} autoplay loop />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
