import './Skill.css'
import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
import animationData from '../../Lottie/animation_webtools.json'
import Lottie from 'lottie-react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiVercel } from "react-icons/si";

const Skills = ({ skillData }) => {
    console.log(skillData)
    const icon = {
        'C++': <CgCPlusPlus />,
        Python: <FaPython />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Figma: <FaFigma />,
        Bootstrap: <FaBootstrap />,
        Vercel: <SiVercel />
    }

    return (
        <div title={skillData} className='SkillBox'>
            {icon[skillData]}
        </div>
    )
}

const Skill = () => {
    const isLoading = useLoading();

    return (
        <div className='bg-[#fefffc] dark:bg-inherit max-w-screen-xl py-10  mx-auto rounded-xl mb-10  shadow-md'>
            {isLoading ? <Loader></Loader> :
                <div>

                    <div className="skill-container flex justify-center text-4xl sm:text-6xl ">
                        <div className="neonText-lightBlue">Skills</div>
                        <div className="neonText-Lightgreen">of</div>
                        <div className="neonText-LightPink">Mine</div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row'>

                        <div className='w-full relative md:w-1/2 md:-top-14 skill-lottie'>
                            <Lottie animationData={animationData} autoplay loop />
                        </div>

                        <div className='w-full relative md:w-1/2 skills text-black dark:text-gray-100 top-10'>

                            <Skills skillData='React' />
                            <Skills skillData='Node' />
                            <Skills skillData='Express' />
                            <Skills skillData='MongoDb' />
                            <Skills skillData='Git' />
                            <Skills skillData='Github' />
                            <Skills skillData='Javascript' />
                            <Skills skillData='C++' />
                            <Skills skillData='Figma' />
                            <Skills skillData='Vercel' />
                            <Skills skillData='Npm' />
                            <Skills skillData='Bootstrap' />

                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Skill;