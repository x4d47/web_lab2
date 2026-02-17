// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Education />
      <Footer />
    </>
  )
}

export default App