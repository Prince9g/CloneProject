import React from "react";
import { PiHouseLight } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

const style = { width: "100px", height: "100px" };
const style2 = { color: "rgb(99,99,99)", fontSize: "16px" };
var style3 = { backgroundColor: "#14355e", color: "white" };

const Services = () => {
  return (
    <div className="container">
      <div className="numbers services">
        <p>OUR SERVICES</p>
        <h1
          data-aos="slide-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
        >
          We Offer a Range of Remodeling
        </h1>
        <h1
          data-aos="slide-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          Services to Meet Every Need
        </h1>
        <div
          className="cards media-flex-col"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <div className="card media-width-100 media-height-fit">
            <div className="icons media-image-size">
              <PiHouseLight style={style} />
            </div>
            <h2>REAL ESTATE</h2>
            <p style={style2}>
              Discover premium real estate projects offering luxury, comfort,
              and modern amenities. Invest in thoughtfully designed spaces that
              blend elegance with convenience, located in prime areas, ensuring
              excellent connectivity.
            </p>
          </div>
          <div className="card media-width-100 media-height-fit">
            <div className="icons">
              <FaDollarSign style={style} />
            </div>
            <h2>FINANCE</h2>
            <p style={style2}>
              Explore top financial solutions designed for growth and security.
              Invest in strategies that offer stability, high returns, and
              personalized services, helping you achieve your financial goals
              while ensuring long-term wealth and peace of mind.
            </p>
          </div>

          <div className="card media-width-100 media-height-fit">
            <div className="icons">
              <IoBookOutline style={style} />
            </div>

            <h2>PORTFOLIO MANAGEMENT</h2>
            <p style={style2}>
              Experience expert portfolio management tailored for optimal growth
              and risk management. Our strategies focus on diversification,
              asset allocation, and continuous monitoring to maximize returns,
              helping you achieve your financial objectives.
            </p>
          </div>
        </div>
        <a className="contact" style={style3}>
          All Services<div className="arrow"> →</div>
        </a>
      </div>

      <div className="projects-images">
        <div className="images-slider">
          <div className="image">
            <a>
              <img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img>
            </a>
            <div className="button-hover">
              <div>
                <h3>Godrej Vrikshya</h3>
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="image">
            <a>
              <img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img>
            </a>
            <div className="button-hover">
              <div>
                <h3>Godrej Vrikshya</h3>
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="image">
            <a>
              <img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img>
            </a>
            <div className="button-hover">
              <div>
                <h3>Godrej Vrikshya</h3>
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="image">
            <a>
              <img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img>
            </a>
            <div className="button-hover">
              <div>
                <h3>Godrej Vrikshya</h3>
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="image">
            <a>
              <img src="https://static.wixstatic.com/media/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.png/v1/fill/w_614,h_461,q_90/e0d270_3e70ee46b17b41bca9a2c36f17ad781c~mv2.webp"></img>
            </a>
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
  );
};

export default Services;
