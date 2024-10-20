import './App.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomePage from './components/homePage'
import Footer from './components/footer';
import ServicesPage from './components/services-page';
import Navbar2 from './components/navbar2'
import BrandsPage from './components/BrandsPage'

function App() {
  React.useEffect(()=>{
    Aos.init({duration:1000, once:true});
},[])
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <Navbar2/>
      <ServicesPage/> */}
      <BrandsPage/>
      <Footer/>
    </div> 
  );
}

export default App;
