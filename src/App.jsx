import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Education from './Components/Education'

function App() {
 

  return (
    <>
      <Hero/>
      <About/>
      <Contact/>
      <Education/>
      <Projects/>
      <Resume/>
      <Skills/>
      <Footer/>
      
      
    </>
  )
}

export default App
