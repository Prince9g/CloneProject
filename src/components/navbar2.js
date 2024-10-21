import React from "react";
import icon from "./logo.png"



const Navbar2 = (props) => {
  const [showLinks, setShowLinks] = React.useState(false);
  const toggleNavbar = () => {
      setShowLinks(!showLinks);

  };
  var style={textDecoration:"underline"};
  return (
    <>
      <div className="navbar" id="navbar2">
        <div className="icon">
          <a href="#home">
            <img src={icon} />
          </a>
        </div>
        <div className={`navbar-list ${showLinks ? "show" : ""}`}>
          <a className="list-item" style={props.underline==='home'? style:{}} onClick={()=> props.changePage('home')}>HOME</a>
          <a className="list-item" style={props.underline==='services'? style:{}} onClick={() => { props.changePage('services'); toggleNavbar();}}>SERVICES</a>
          <a className="list-item" style={props.underline==='projects'? style:{}} onClick={() => { props.changePage('projects'); toggleNavbar();}}>PROJECTS</a>
          <a className="list-item" style={props.underline==='about'? style:{}} onClick={() => { props.changePage('about'); toggleNavbar();}}>ABOUT US</a>
          <a className="list-item" style={props.underline==='brands'? style:{}} onClick={() => { props.changePage('brands'); toggleNavbar();}}>BRANDS</a>
          <a className="contact">
            Contact us<div className="arrow"> →</div>
          </a>
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
                ☰
      </div>
      </div>
    </>
  );
};

export default Navbar2;
