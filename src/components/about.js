import React, {useRef} from 'react'
import './style/about.css'

const About = () => {
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
    var style={backgroundColor:"#14355e",  color:"white"}
  return (
    <div className="about">
        <div className="about-company">
            <div className="about-content">
                <p>ABOUT OUR COMPANY</p>
                <h2>We provide professional solutions to deliver safe & efficient projects</h2>
                <p className="paragraph">This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
                <a className='contact' style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Read More<div className="arrow" ref={arrowRef}> →</div></a>
            </div>
            <img src="https://static.wixstatic.com/media/e0d270_4d09dfa185234e14bb8e9ad76d595f68~mv2.jpg/v1/crop/x_0,y_17,w_1024,h_907/fill/w_746,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/image1_02_edited.jpg"/>
        </div>
    </div>
  )
}

export default About
