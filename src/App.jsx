import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;