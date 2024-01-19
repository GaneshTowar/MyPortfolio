import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({navBar,setnavBar}) => {

  function switchNavBar() {
    console.log(navBar);
    setnavBar(!navBar);
  }
  return (
    <header className="sticky top-5 text-black font-bold">
      <div className="flex justify-between items-center px-4 md:px-10">
        <div>
          <h1 className="cursor-pointer text-3xl font-bold hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            Ganesh Towar
          </h1>
        </div>
        <nav className={`hidden space-x-4 cursor-pointer md:flex `}>
          <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            Home
          </div>
          <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            Skills
          </div>
          <a href="#exp">
            <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
              Experience
            </div>
          </a>{" "}
          <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            Projects
          </div>
          <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            Contacts
          </div>
        </nav>
        {
          !navBar &&  <GiHamburgerMenu className="md:hidden" onClick={switchNavBar}/>

        }
       
        {navBar && (
          <nav
            className={`flex-col z-50 backdrop-blur-sm bg-gradient-to-r bg-sky-200 text-center h-screen w-screen fixed top-0 right-0 space-x-4 cursor-pointer`}
          >
                        <div
              onClick={switchNavBar}
              className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 bg-gradient-to-r from-slate-50 to-red-300 px-4 py-1 rounded-full w-fit m-4"
            >
              Close
            </div>
            <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md  ml-4 ">
              Home
            </div>
            <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
              Skills
            </div>

            <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
              Experience
            </div>

            <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
              Projects
            </div>
            <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
              Contacts
            </div>

          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className="sticky top-5 text-black ">
//       <div className="flex justify-between items-center px-10">
//         <div>
//           <h1 className="cursor-pointer text-3xl font-bold hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
//             Ganesh Towar
//           </h1>
//         </div>
//         <nav className="flex space-x-4 cursor-pointer">
//           <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
//             Home
//           </div>
//           <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
//             Skills
//           </div>
//           <a href="#exp">
//             <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
//               Experience
//             </div>
//           </a>{" "}
//           <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
//             Projects
//           </div>
//           <div className="header-link hover:translate-x-1 hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
//             Contacts
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
