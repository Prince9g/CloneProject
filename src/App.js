import './App.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomePage from './components/homePage'
import Footer from './components/footer';
import ServicesPage from './components/services-page';
import Navbar2 from './components/navbar2'
import BrandsPage from './components/BrandsPage'
import ProjectsPage from './components/Project-page';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
    },
    {
      path:'/Y',
      element:<Navbar2/>,
      children:[
        {
          path:'/Yservices',
          element:<ServicesPage/>
        },
        {
          path:'/Y',
          element:<Footer/>
        },
        {
          path:'/Yprojects',
          element:<ProjectsPage/>
        },
        {
          path:'/Ybrands',
          element:<BrandsPage/>
        },
        {
          path:'/Yabout',
          element:' '
        }
      ]
    },
    // {
    //   path:'/login',
    //   element:<Login/>
    // },
    // {
    //   path:'/signup',
    //   element:<Signup/>
    // }
  ])
  React.useEffect(()=>{
    Aos.init({duration:1000, once:true});
},[])
  return (
    // <div className="App">
    //   {/* <HomePage/> */}
    //   <Navbar2/>
    //   {/* <ServicesPage/> */}
    //   {/* <BrandsPage/> */}
    //   <ProjectsPage/>
    //   <Footer/>
    // </div> 
    <RouterProvider router={BrowserRouter}/>
  );
}

export default App;
