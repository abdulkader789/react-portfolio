import "./Header.css";

import { TypeAnimation } from "react-type-animation";
import profileImage from "../../images/profile_pic.jpg";
import { Link } from "react-router-dom";
import animationData from "../../Lottie/animation_developer1.json";
import Lottie from "lottie-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socialIcons = [
  {
    Icon: FaGithub,
    text: "GitHub",
    bgColor: "bg-gray-800",
    textColor: "text-gray-800 dark:text-white",
    hoverBgColor: "hover:bg-gray-800",
  },
  {
    Icon: FaFacebookF,
    text: "Facebook",
    bgColor: "bg-blue-600",
    textColor: "text-blue-600",
    hoverBgColor: "hover:bg-blue-600",
  },
  {
    Icon: FaTwitter,
    text: "Twitter",
    bgColor: "bg-blue-400",
    textColor: "text-blue-400",
    hoverBgColor: "hover:bg-blue-400",
  },
  {
    Icon: FaLinkedinIn,
    text: "LinkedIn",
    bgColor: "bg-blue-700",
    textColor: "text-blue-700",
    hoverBgColor: "hover:bg-blue-700",
  },
  {
    Icon: FaInstagram,
    text: "Instagram",
    bgColor: "bg-pink-500",
    textColor: "text-pink-500",
    hoverBgColor: "hover:bg-pink-500",
  },
];

const Header = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row justify-center w-full items-center">
      <section className="w-full relative  h-1/2 lg:h-full">
        <Lottie
          animationData={animationData}
          autoplay
          loop
          className="h-full w-full"
        />
      </section>

      <section className="h-1/2 lg:h-full w-full flex flex-col lg:justify-center  items-center px-5">
        <div className="w-full">
          <h3 className="michroma-regular font-bold text-xl mb-1 dark:text-white">
            Mern-Stack Developer
          </h3>
          <h2 className="poppins-extrabold text-4xl dark:text-white mb-3">
            Hello I'm <br />
            Abdul Kader
          </h2>
          <p className="lg:w-1/2 mb-5  work-sans dark:text-gray-50">
            Aspiring MERN Stack Developer with a B.Sc. in Computer Science and
            Engineering from Primeasia University, Dhaka.
          </p>
        </div>

        <div className="flex flex-col w-full justify-center">
          <div>
            <button
              className="flex w-auto mb-5 michroma-regular text-[12px] uppercase h-12 py-2 items-center rounded-full justify-center gap-2 whitespace-nowrap  bg-emerald-500 px-6 lg:px-10 
            font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              <span>download cv</span>
            </button>
          </div>
          <div className="flex items-center">
            {socialIcons.map((socialIcon, index) => (
              <div
                key={index}
                className={`flex h-8 w-8 rounded-full mr-3 border justify-center items-center transition-colors duration-300 ${socialIcon.textColor} ${socialIcon.hoverBgColor} hover:text-white`}
              >
                <socialIcon.Icon className="cursor-pointer text-[14px]" />
                <p className="hidden">{socialIcon.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <section className="h-screen flex justify-center w-full items-center">
//       <div className="w-full  h-full flex flex-col md:flex-row">
//         <div className="relative  h-1/2 md:h-full">
//           <img
//             className="h-full w-full object-cover  relative left-0 top-0 "
//             src={profileImage}
//             alt="Profile"
//           />
//           <div className="absolute inset-0 bg-green-500 opacity-50"></div>
//         </div>
//         {/* <div className="flex justify-center items-center -top-6 h-full absolute inset-y-0 left-1/2 transform -translate-x-1/2">
//           <div className="flex six-caps-regular text-6xl md:text-8xl">
//             <div className="border rounded-l-full bg-white h-[200px] w-[100px] md:h-[300px] md:w-[150px] flex justify-center items-center">
//               <h2 className="text-center hidden md:inline-block font-bold   uppercase">
//                 abdul
//               </h2>
//               <h2 className="text-center md:hidden  font-bold uppercase">
//                 ab
//                 <br />
//                 dul
//               </h2>
//             </div>
//             <div className="border rounded-r-full bg-gray-400 h-[200px] w-[100px] md:h-[300px] md:w-[150px] flex justify-center items-center">
//               <h2 className="text-center hidden  md:inline-block font-bold  uppercase">
//                 kader
//               </h2>
//               <h2 className="text-center  font-bold md:hidden ">
//                 ka
//                 <br />
//                 der
//               </h2>
//             </div>
//           </div>
//         </div> */}

//         <div className="h-1/2 md:h-full w-1/2 flex flex-col justify-center items-center px-10">
//           <div className="w-full">
//             {/* <TypeAnimation
//               sequence={[
//                 // Same substring at the start will only be typed out once, initially
//                 "web developer",
//                 1000, // wait 1s before replacing "Mice" with "Hamsters"
//                 "youtuber",
//                 1000,
//                 "app developer",
//                 1000,
//                 "blogger",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               style={{ display: "inline-block" }}
//               repeat={Infinity}
//               className="text-green-600 capitalize roboto-regular text-xl"
//             /> */}
//             <h3 className="joti-one font-bold text-xl mb-1">
//               Mern-Stack Developer
//             </h3>
//             <h2 className="poppins-extrabold text-sm md:text-md lg:text-6xl dark:text-white mb-3">
//               Hello I'm <br />
//               Abdul Kader
//             </h2>
//             <p className="lg:w-1/2 mb-5 work-sans">
//               Aspiring MERN Stack Developer with a B.Sc. in Computer Science and
//               Engineering from Primeasia University, Dhaka.
//             </p>
//           </div>

//           <section className="flex justify-start items-center w-full">
//             <button className="flex mr-5 uppercase h-12 py-2 items-center rounded-full justify-center gap-2 whitespace-nowrap  bg-emerald-500 px-8 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
//               <span>download cv</span>
//             </button>
//             <div className="flex items-center">
//               {socialIcons.map((socialIcon, index) => (
//                 <div
//                   key={index}
//                   className={`flex h-10 w-10 rounded-full border justify-center items-center transition-colors duration-300 ${
//                     index !== socialIcons.length - 1 ? "mr-5" : ""
//                   } ${socialIcon.textColor} ${
//                     socialIcon.hoverBgColor
//                   } hover:text-white`}
//                 >
//                   <socialIcon.Icon className="cursor-pointer text-[14px]" />
//                   <p className="hidden">{socialIcon.text}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;
