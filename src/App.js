// App.js
import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/skills';
import './App.css';
import Experience from './components/Experience';


function App() {
  const [navBar, setnavBar] = useState(false);
  return (
    <div className="App h-screen">

      <Header navBar={navBar} setnavBar={setnavBar}/>
      <About navBar={navBar} setnavBar={setnavBar} />
      <Experience/>
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
