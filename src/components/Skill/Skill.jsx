import "./Skill.css";
import { useLoading } from "../Loader/useLoading";
import Loader from "../Loader/Loader";
import animationData from "../../Lottie/animation_webtools.json";
import Lottie from "lottie-react";
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = ({ skillData }) => {
  console.log(skillData);
  const icon = {
    "C++": <CgCPlusPlus />,

    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
  };

  return (
    <div title={skillData} className="SkillBox">
      {icon[skillData]}
    </div>
  );
};

const Skill = () => {
  const isLoading = useLoading();

  return (
    <div className="bg-[#fefffc] dark:bg-inherit py-10 mx-auto rounded-xl mb-10 shadow-md">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="skill-container flex text-4xl sm:text-6xl w-full justify-center">
            <div className="neonText-lightBlue">Skills</div>
            <div className="neonText-Lightgreen">of</div>
            <div className="neonText-LightPink">Mine</div>
          </div>
          <div className="w-full flex flex-col justify-center items-center lg:flex-row">
            <div className="w-full relative md:w-1/2 md:-top-14 skill-lottie">
              <Lottie animationData={animationData} autoplay loop />
            </div>
            <div className="w-full relative md:w-1/2 my-auto h-full grid grid-cols-2 md:grid-cols-3 lg:gap-4 place-items-center text-center text-black dark:text-gray-100 top-10">
              <Skills skillData="React" />
              <Skills skillData="Node" />
              <Skills skillData="Express" />
              <Skills skillData="MongoDb" />
              <Skills skillData="Git" />
              <Skills skillData="Github" />
              <Skills skillData="Javascript" />
              <Skills skillData="C++" />
              <Skills skillData="Npm" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skill;
