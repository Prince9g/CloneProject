import React from 'react'
import { PiHouseLight, PiX } from "react-icons/pi"
import { FaDollarSign } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import './style/services.css'

const style={width:"100px", height:"100px"}
const style2={color:"black", fontSize:"16px"}

var style3={backgroundColor:"#14355e",  color:"white"}

const Services = () => {
  const arrowRef = React.useRef(null);

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
    <div className="numbers services">
      <p>OUR SERVICES</p>
      <h1 >We Offer a Range of Remodeling</h1>
      <h1>Services to Meet Every Need</h1>
      <div className="cards" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className="card">
        <div className="icons" ><PiHouseLight style={style}/></div>
            <h2>REAL ESTATE</h2>
            <p style={style2}>Discover premium real estate projects offering luxury, comfort, and modern amenities. Invest in thoughtfully designed spaces that blend elegance with convenience, located in prime areas, ensuring excellent connectivity.</p>
        </div>
        <div className="card">
        <div className="icons" ><FaDollarSign style={style}/></div>
            <h2>FINANCE</h2>
            <p style={style2}>Explore top financial solutions designed for growth and security. Invest in strategies that offer stability, high returns, and personalized services, helping you achieve your financial goals while ensuring long-term wealth and peace of mind.</p>
        </div>
        
        <div className="card">
            <div className="icons" ><IoBookOutline style={style}/></div>
            
            <h2>PORTFOLIO MANAGEMENT</h2>
            <p style={style2}>Experience expert portfolio management tailored for optimal growth and risk management. Our strategies focus on diversification, asset allocation, and continuous monitoring to maximize returns, helping you achieve your financial objectives.</p>
        </div>
        </div>
        <a className='contact' style={style3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Interest<div className="arrow" ref={arrowRef}> →</div></a>
        

</div>
  )
}

export default Services
