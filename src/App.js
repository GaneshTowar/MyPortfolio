// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/skills';
import './App.css';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App h-screen">

      <Header />
      <About />
      <Experience/>
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
