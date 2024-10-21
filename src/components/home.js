import React from 'react'
import bg from './background-video.mp4'

function Home() {
    var style={backgroundColor:"white",  color:"black"}
  return (
    <>
    
    <div className="opening">
    <video autoPlay={true} loop={true} playsInline muted id="video" src={bg}/>
        <div className="content-parent media-center">
            <div className="content media-center">
                <h1>Empowering Your Real Estate and Financial Future</h1>
                <p>Shaping Features, BUilding Dreams.</p>
                <a className='contact' style={style} >Get Interest<div className="arrow"> →</div></a>
            </div>
        </div>
    </div>
    </>
    
  )
}
export default Home;
