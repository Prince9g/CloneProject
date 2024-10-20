import React from 'react'
import Navbar from './navbar';
import Home from './home';
import Partners from './partners';
import About from './about';
import Numbers from './numbers';
import Projects  from './projects';
import Services from'./services';
import Footer from './footer';

const HomePage = () => {
  return (
    <>
      <Navbar/> 
      <Home/>
      <Partners/>
      <About/>
      <Numbers/>
      <Projects/>
      <Services/>
      <Footer/>
    </>
  )
}

export default HomePage;
