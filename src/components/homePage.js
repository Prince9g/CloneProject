import React from 'react'
import Navbar from './navbar';
import Home from './home';
import Partners from './partners';
import About from './about';
import Numbers from './numbers';
import Projects  from './projects';
import Services from'./services';

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
    </>
  )
}

export default HomePage;
