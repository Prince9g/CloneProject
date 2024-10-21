import React, { useRef, useState, useEffect } from "react";
import icon from "./logo.png"


export default function Navbar(props) {
  const navRef = useRef(null);
  let lastScrollTop = 0;

  function handleScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (lastScrollTop < scrollTop && scrollTop > 200) {
      navRef.current.style.display = "none";
    } else if (lastScrollTop > scrollTop) {
      navRef.current.style.display = "flex";
    }
    if (window.scrollY < 100) {
      navRef.current.style.backgroundColor = "transparent";
    } else {
      navRef.current.style.backgroundColor = "#14355e";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
   


    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavbar = () => {
      setShowLinks(!showLinks);
      if(showLinks){
        navRef.current.style.backgroundColor = "#14355e";
      }
  };
  var style={textDecoration:"underline"};

  return (
    <div className="navbar" ref={navRef}>
      <div className="icon">
        <a href="#home">
          <img src={icon} />
        </a>
      </div>
      <div className={`navbar-list ${showLinks ? "show" : ""}`}>
        <a className="list-item" style={style} onClick={()=> props.changePage('home')}>HOME</a>
        <a className="list-item" onClick={()=> props.changePage('services')}>SERVICES</a>
        <a className="list-item" onClick={()=> props.changePage('projects')}>PROJECTS</a>
        <a className="list-item" onClick={()=> props.changePage('about')}>ABOUT US</a>
        <a className="list-item" onClick={()=> props.changePage('brands')}>BRANDS</a>
        <a className="contact">
          Contact us<div className="arrow"> →</div>
        </a>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
                ☰
      </div>
    </div>
  );
}
