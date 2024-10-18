import React, { useRef } from 'react'
import video from './videoplayback.mp4'
import './style/home.css'
import './style/navbar.css'

function Home() {
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
    var style={backgroundColor:"white",  color:"black"}
  return (
    <>
    <video autoPlay={true} loop={true} playsInline muted id="video-page" src="https://video.wixstatic.com/video/e0d270_432ab3f6ee8c444e8123949949b1148b/1080p/mp4/file.mp4"
   />
    <div className="opening">
        <div className="content-parent">
            <div className="content">
                <h1>Empowering Your Real Estate and Financial Future</h1>
                <p>Empowering Your Real Estate and Financial Future</p>
                <a className='contact' style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Interest<div className="arrow" ref={arrowRef}> →</div></a>
            </div>
        </div>
    </div>
    </>
    
  )
}
export default Home;
