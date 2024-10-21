import React from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Numbers = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000});
},[])
  return (
    <div className="container">
      <div className="numbers">
      <p>US IN NUMBERS</p>
      <div className="cards media-flex-col" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
        <div className="card media-width-100 media-height-fit">
            <h1>1000+</h1>
            <p>Happy Costumers</p>
        </div>
        <div className="card media-width-100 media-height-fit">
            <h1>20+</h1>
            <p>Ofiicial Channel Partners</p>
        </div>
        
        <div className="card media-width-100 media-height-fit">
            <h1>50+</h1>
            <p>Professionals</p>
        </div>
      </div>  
    </div>
  </div>
    
  )
}

export default Numbers;
