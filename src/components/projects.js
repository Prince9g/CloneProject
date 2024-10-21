import React, {useRef} from 'react'


const Projects = () => {
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
    <div className="projects">
        <div className="projects-header">
            <h1 data-aos="slide-right" data-aos-easing="ease-in-sine" data-aos-duration="400">We curate spaces you'll fall in love</h1>
            <a className='contact' style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Interest<div className="arrow" ref={arrowRef}> →</div></a>
        </div>
       <div className="projects-images ">
        <div className="images-slider ">
            <div className="image">
                <a><img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img></a>
                <div className="button-hover">
                    <div>
                        <h3>Godrej Vrikshya</h3>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <a><img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img></a>
                <div className="button-hover">
                    <div>
                        <h3>Godrej Vrikshya</h3>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <a><img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img></a>
                <div className="button-hover">
                    <div>
                        <h3>Godrej Vrikshya</h3>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <a><img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img></a>
                <div className="button-hover">
                    <div>
                        <h3>Godrej Vrikshya</h3>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <a><img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img></a>
                <div className="button-hover">
                    <div>
                        <h3>Godrej Vrikshya</h3>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <a><img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img></a>
                <div className="button-hover">
                    <div>
                        <h3>Godrej Vrikshya</h3>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Projects
