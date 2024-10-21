import React from 'react'
import image from './image1.jpg'



const numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
const BrandsPage = () => {
  return (
    <>
    <div className='Brands-page-heading'>
        <p>Our Valued Partners</p>
        <h1>SERVING INDUSTRY LEADERS</h1>
    </div>
    <div className='Brandss'>
        {numbers.map((number, index)=>(
            <img className="brand-image media-image-size" src={image} key={index}/>
        ))}
    </div>
    <div className='container'>
        <div className='relationships media-flex-col'>
            <img className="media-width-100" src='https://static.wixstatic.com/media/e0d270_d5a1ad7037ee4ef1bc7e23e132ac99ec~mv2.jpg/v1/fill/w_873,h_875,fp_0.48_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/modern-luxury-apartment-building-with-modern-architectural-design.jpg'/>
            <div className='Brands-content media-width-100'>
                <div className="sub media-width-100">
                <h1 className="media-width-100">Building Strong Relationships</h1>
                <p className="media-width-100">Building strong relationships requires trust, open communication, and mutual respect. These elements foster collaboration, resolve conflicts, and create a supportive environment, whether in personal life or professional settings, leading to lasting success.</p>
                <a>CONTACT US</a>
                </div>
                
                <div className='images'>
                    <img src='https://static.wixstatic.com/media/e0d270_4a3f6e0d413c44e09d45698b200982c8~mv2.jpg/v1/fill/w_268,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dlf-lux-5-gurgaon.jpg'/>
                    <img src='https://static.wixstatic.com/media/e0d270_7edd93bb9ba04d6da559e438a9e5f78f~mv2.webp/v1/fill/w_268,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/godrej-vriksha.webp'/>
                    <img src='https://static.wixstatic.com/media/e0d270_05a72e6d6a694312a9cb8624ecffcd98~mv2.jpg/v1/fill/w_268,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Elevations_0001_View-11-1024x507_edited.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div>
    </div>
   
    </>
  )
}

export default BrandsPage
