
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-5 text-black ">
      <div className="flex justify-between items-center px-4 md:px-10">
        <div>
          <h1 className="cursor-pointer text-3xl font-bold hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            Ganesh Towar
          </h1>
        </div>
        <nav className={`md:flex space-x-4 cursor-pointer ${showMenu ? 'block' : 'hidden'}`}>
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
        {/* Hamburger menu button for small screens */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </div>
      {/* Responsive navigation for small screens */}
      {showMenu && (
        <div className="md:hidden">
          {/* Responsive Navigation items */}
          {/* ... */}
        </div>
      )}
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
