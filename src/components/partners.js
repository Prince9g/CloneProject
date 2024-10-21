import React from 'react'

import image from './image1.jpg'



function Partners() {
    var numbers=[1,2,3,4,5,6,7,8,9,10,2,3,3,2,3,211,3,2];
    return (
        <div className="partners">
            <div className="heading">
                <h2>OUR PARTNERS</h2>
                <p>We believe every client is a valuable long-term partner.</p>
            </div>
            <div className="brands">
                <img className="background" src="https://static.wixstatic.com/media/e0d270_1fe9d1f7b6924d0d8ea5fefa7250eb87~mv2.png/v1/fill/w_571,h_205,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0d270_1fe9d1f7b6924d0d8ea5fefa7250eb87~mv2.png"/>
                <div className='brands-scroll'>
                    {numbers.map((number, index)=>(
                        <img className="brand-image media-image-size" src={image} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Partners
