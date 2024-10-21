import React from 'react'
import Navbar from './navbar';
import Home from './home';
import Partners from './partners';
import About from './about';
import Numbers from './numbers';
import Projects  from './projects';
import Services from'./services';
import Footer from './footer';

const HomePage = (props) => {
  return (
    <>
      <Navbar changePage={props.changePage}/> 
      <Home changePage={props.changePage}/>
      <Partners changePage={props.changePage}/>
      <About changePage={props.changePage}/>
      <Numbers changePage={props.changePage}/>
      <Projects changePage={props.changePage}/>
      <Services changePage={props.changePage}/>
    </>
  )
}

export default HomePage;
