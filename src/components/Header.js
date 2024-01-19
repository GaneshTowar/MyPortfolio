import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Css/Project.css"

const Header = ({navBar,setnavBar, AboutRef ,experienceRef,skillsRef,projectsRef,contactsRef}) => {

  function switchNavBar() {
    console.log(navBar);
    setnavBar(!navBar);
  }

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-5 text-black font-bold" >
      <div className="flex justify-between items-center px-4 md:px-10">
        <div>
          <h1 className="cursor-pointer text-3xl font-bold hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md hidden md:flex">
            Ganesh Towar
          </h1>
        </div>
        <nav className={`hidden space-x-4 cursor-pointer md:flex `}>
          <div onClick={() => scrollToRef(AboutRef)}
          className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
            Home
          </div>
          <div onClick={() => scrollToRef(skillsRef)}
          className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
            Skills
          </div>
          <a href="#exp">
            <div onClick={() => scrollToRef(experienceRef)}
            className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
              Experience
            </div>
          </a>{" "}
          <div onClick={() => scrollToRef(projectsRef)}
          className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
            Projects
          </div>
          <div onClick={() => scrollToRef(contactsRef)}
          className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
            Contacts
          </div>
        </nav>
        {
          !navBar &&  <GiHamburgerMenu className="md:hidden" onClick={switchNavBar}/>

        }
       
        {navBar && (
          <nav
            className={`flex-col z-50 backdrop-blur-sm bg-gradient-to-r bg-slate-200 text-center h-screen w-screen fixed top-0 right-0 space-x-4 cursor-pointer text-stroke text-white`}
          >
                        <div
              onClick={switchNavBar}
              className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 bg-gradient-to-r from-slate-50 to-slate-300 px-4 py-1 border-2 border-black w-fit m-4"
            >
              Close
            </div>
            <div onClick={() => scrollToRef(AboutRef)}
            className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md  ml-4 ">
              Home
            </div>
            <div onClick={() => scrollToRef(skillsRef)}
            className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
              Skills
            </div>

            <div onClick={() => scrollToRef(experienceRef)}
            className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
              Experience
            </div>

            <div onClick={() => scrollToRef(projectsRef)}
            className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
              Projects
            </div>
            <div onClick={() => scrollToRef(contactsRef)}
            className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-slate-400 px-4 py-1 rounded-md">
              Contacts
            </div>

          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


