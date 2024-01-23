// App.js
import React, { useState, useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/skills";
import "./App.css";
import Experience from "./components/Experience";


function App() {
  const [navBar, setnavBar] = useState(false);
  const AboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  console.log("Refs:",AboutRef,  skillsRef, experienceRef, projectsRef, contactsRef);

  return (
    
    <div className="App h-screen bg-blend-lighten bg-cover " >

      <Header navBar={navBar} setnavBar={setnavBar}
      AboutRef={AboutRef}
      experienceRef={experienceRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      contactsRef={contactsRef}
       />

      <About ref={AboutRef} navBar={navBar} setnavBar={setnavBar} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactsRef} />
    </div>
  );
}

export default App;
