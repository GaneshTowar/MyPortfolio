import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";
import profile1 from "./Images/profile.jpeg";
import "./Css/Project.css"
import "./Css/ProfileImage.css";
import resumePDF from "./Docs/resume2024.pdf"
import Aos from "aos";
import "aos/dist/aos.css"


import React, { useEffect } from "react";

const About = ({navBar, setnavBar}) => {


  useEffect(()=>{
      Aos.init({duration:2000})
  },[])


    const redirectToGitHub = () => {
        window.location.href = 'https://github.com/GaneshTowar'; // Replace with your GitHub profile URL
      };
      const redirectToLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/ganesh-towar-400bb3189/'; // Replace with your GitHub profile URL
      };
      const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Ganesh-Towar-resume.pdf'; // Specify the name you want for the downloaded file
        link.click();
      };

    
  return (
    <>
      <section  className="grid md:grid-cols-6 h-fit place-content-around cursor-default grid-cols-1 sm:py-0 lg:py-28  md:py-20 xl:py-32 2xl:py-40  ">
        <div data-aos="fade-right"  className="flex md:flex-col gap-8 p-6 items-center col-span-1 justify-center md:order-1 order-3">
          <div className=" cursor-pointer hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md"
          onClick={redirectToGitHub}>
            <SiGithub size={25} />
          </div>
          <div className="cursor-pointer hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md"
                    onClick={redirectToLinkedIn}>
            <FaLinkedinIn size={25} />
          </div>
          <div className="cursor-pointer hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md"
                    onClick={downloadResume}>
            <LiaFileDownloadSolid size={25} />
          </div>
        </div>

        <div className="flex flex-col gap-6 col-span-3 content-center md:text-left px-20 md:order-2 order-2 text-center">
          <p data-aos="fade-down"  className="text-5xl text-white font-bold text-stroke  ">Ganesh Towar</p>
          <p data-aos="fade-down"  className="text-2xl font-extrabold text-white text-stroke ">Full Stack developer</p>
          <p data-aos="fade-up"  className=" font-bold text-black text-xl  ">
            Welcome to my portfolio! I am a passionate  web developer  with
            experience in React, JavaScript, express, next ,react native and learning more.
          </p>
        </div>
        {   
        !navBar &&  
            <div data-aos="fade-left" 
              className=" md:h-64 border-t-0 border-b-8 bg-top border-r-2 border-l-2 border-black aspect-auto md:w-full md:bg-cover md:m-auto moving-border-div bg-cover bg-no-repeat bg-transparent md:order-3 order-1 transition-opacity duration-1000 ease-in-out z-0 "
              style={{
                backgroundImage: `url(${profile1})`,
              }}
            ></div>
        }
      </section>
    </>
  );
};

export default About;
