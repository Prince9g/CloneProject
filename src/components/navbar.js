import React, { useRef , useState, useEffect} from 'react'
import icon from './Untitled design (23)_edited.webp'
import './style/navbar.css'



export default function Navbar() {

   const navRef=useRef(null);
   let lastScrollTop=0;
   console.log(navRef.current)

   function handleScroll(){
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if(lastScrollTop<scrollTop && scrollTop>200){
      navRef.current.style.display="none";
    }
    else if(lastScrollTop>scrollTop){
      navRef.current.style.display="flex";
    }
      if(window.scrollY<100){
        navRef.current.style.backgroundColor="transparent";
      }
      else{
        navRef.current.style.backgroundColor="#14355e";
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
   }


   useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [])

    const arrowRef = useRef(null);

    const handleMouseEnter = () => {
        if (arrowRef.current) {
            arrowRef.current.style.transform = "rotate(360deg)";
        }
    };

    const handleMouseLeave = () => {
        if (arrowRef.current) {
            arrowRef.current.style.transform = "rotate(45deg)";
        }
    };

  return (
    <div className="navbar" ref={navRef}>
        <div className='icon'>
            <a href="#home"><img src={icon}/></a>
        </div>
      <div className='navbar-list'>
        <a className='list-item'>HOME</a>
        <a className='list-item'>SERVICES</a>
        <a className='list-item'>PROJECTS</a>
        <a className='list-item'>ABOUT US</a>
        <a className='list-item'>BRANDS</a>
        <a className='contact' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact us<div className="arrow"  ref={arrowRef}> →</div></a>
      </div>
    </div>
  )

}


