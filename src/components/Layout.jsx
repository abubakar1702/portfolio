import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Skills from './Skills'
import AboutMe from './AboutMe'
//import NavBar from './Navbar/Navbar'

const Layout = () => {
  return (
    <div
    className='m-auto h-screen bg-[#f8f8f8] border rounded-lg'
>
    <Navbar />
    <About />
    <AboutMe />
    <Projects />
    <Gallery />
    <Contact />
</div>
  )
}

export default Layout