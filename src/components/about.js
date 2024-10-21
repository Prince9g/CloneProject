import React, {useRef} from 'react'

const About = () => {
    const arrowRef = useRef(null);
    var style={backgroundColor:"#14355e",  color:"white"}
  return (
    <div className="about ">
        <div className="about-company media-flex-col media-width-100">
            <div className="about-content media-width-100 ">
                <p>ABOUT OUR COMPANY</p>
                <h2 data-aos="slide-right" data-aos-easing="ease-in-sine" data-aos-duration="500">We provide professional solutions to deliver safe & efficient projects</h2>
                <p className="paragraph">This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
                <a className='contact' style={style}>Read More<div className="arrow"> →</div></a>
            </div>
            <img className="media-width-100" src="https://static.wixstatic.com/media/e0d270_4d09dfa185234e14bb8e9ad76d595f68~mv2.jpg/v1/crop/x_0,y_17,w_1024,h_907/fill/w_746,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/image1_02_edited.jpg"/>
        </div>
    </div>
  )
}

export default About;
