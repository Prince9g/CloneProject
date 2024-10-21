import './App.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomePage from './components/homePage'
import Footer from './components/footer';
import Navbar2 from './components/navbar2'
import BrandsPage from './components/BrandsPage'
import ProjectsPage from './components/Project-page';
import Career from './components/Career';
import Events from './components/Events';
import AboutUs from './components/AboutUs';

function App() {
  React.useEffect(()=>{
    Aos.init({duration:1000, once:true});
},[])


  const[page, setPage]=React.useState("home");
  function changePage(newPage){
    setPage(newPage);
  }
  return (
    <div className="App">
      {page==="home"?<HomePage changePage={changePage}/>:<></>}
      {page!=="home"?<Navbar2 changePage={changePage} underline={page}/>:<></>}
      {page==="services"?<Career changePage={changePage}/>:<></>}
      {page==="events"?<Events changePage={changePage}/>:<></>}
      {page==="brands"?< BrandsPage changePage={changePage}/>:<></>}
      {page==="projects"?<ProjectsPage changePage={changePage}/>:<></>}
      {page==="about"?<AboutUs changePage={changePage}/>:<></>}
      <Footer/>
    </div> 
  );
}

export default App;
