import React from "react";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="about-text">
          <p className="about-header">ABOUT US</p>
          <p className="about-subheader">We Provide For People</p>
          <p className="about-description">
            We are a team of high-grade professionals rendering the best
            services to our clients for the last two decades. We select projects
            with prime locations and value-for-money investments. Our
            experienced and dynamic team evaluates the project and the builder
            on multiple parameters before pitching it to the clients. Our aim is
            to ensure that the investment grows multifold in times to come and
            remains safe.
          </p>
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/e0d270_4387e564adae4f3baafeb08b8ad0df68~mv2.jpg/v1/crop/x_889,y_0,w_3388,h_3640/fill/w_514,h_555,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/complex-aerial-view-city.jpg"
            alt="iimage"
            className="about-img"
          />
        </div>
      </div>
      <hr />
      <div>
        <div className="text-2xl sm:m-9 m-5">
          <p className="font-semibold sm:mb-5 mb-4">WHY US?</p>
          <p className="font-light">
            At Grandview Consulting, we specialize in providing expert guidance
            and comprehensive solutions in real estate consultancy, financial
            consultancy, and portfolio management. With a commitment to
            excellence and a deep understanding of market dynamics, we empower
            our clients to make informed decisions and achieve their financial
            goals.
          </p>
        </div>
        <div className="grid sm:grid-rows-1 grid-rows-2 grid-flow-col sm:m-10 m-5">
          <div className="mt-8 w-[95%]">
            <img
              src="https://static.wixstatic.com/media/e0d270_bde61dd0a9aa4d1d8da79d0c9bfba81bf000.jpg/v1/fill/w_622,h_593,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/e0d270_bde61dd0a9aa4d1d8da79d0c9bfba81bf000.jpg"
              alt=""
              className="image-style"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 sm:m-7 m-3">
            <div>
              <img
                src="https://static.wixstatic.com/media/e0d270_bc918ce2366f47449f4b6eac1de35247~mv2.jpg/v1/fill/w_311,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Signature-Global-business-park-sector-35-sohna_edited.jpg"
                alt=""
                className="image-style"
              />
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/e0d270_0ec369828efd4397b6ea2fdac1d4961b~mv2.jpg/v1/fill/w_311,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d-photo-building-with-bunch-windows-that-says-kfc-it.jpg"
                alt=""
                className="image-style"
              />
            </div>
            <div className="col-span-2">
              <img
                src="https://static.wixstatic.com/media/e0d270_c3d554b5fcf74b8583a0509a47b87528~mv2.jpg/v1/fill/w_653,h_281,fp_0.50_0.65,q_80,usm_0.66_1.00_0.01,enc_auto/palm-trees-buildings-san-diego.jpg"
                alt=""
                className="image-style"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-grid">
        <div className="mission-text">
          <p className="about-header">OUR MISSION</p>
          <p className="mission-header">Building a Sustainable Future</p>
          <p className="mission-description">
            At Grandview Consulting, our mission is to transform the real estate
            landscape by setting new benchmarks for service excellence, client
            satisfaction, and market expertise. We are dedicated to delivering
            personalized, high-quality solutions that cater to the unique needs
            of each client. Our commitment is to provide comprehensive guidance
            throughout every stage of the real estate journey.
          </p>
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/e0d270_4d09dfa185234e14bb8e9ad76d595f68~mv2.jpg/v1/fill/w_569,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/image1_02_edited.jpg"
            alt="iimage"
            className="about-img"
          />
        </div>
      </div>
      <div className="testimonial-container">
        <h2 className="testimonial-header">
          Client Success Stories: Hear What Our Clients Say
        </h2>
        <div className="testimonial-grid">
          <div className="testimonial-box">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "Working with Grandview was an absolute pleasure! They helped me
              find my dream workplace within my budget and were incredibly
              patient throughout the process. Their market knowledge and
              attention to detail are unmatched."
            </p>
            <p className="testimonial-name">Rahul Goyal</p>
            <p className="testimonial-location">Gurgaon, Haryana</p>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "I've been investing in real estate for years, and Grandview is by
              far the best agency I've worked with. Their insights into the
              market trends helped me make profitable decisions."
            </p>
            <p className="testimonial-name">Suraj Karakoti</p>
            <p className="testimonial-location">New Delhi</p>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "As a rental property owner, I needed an agency I could trust.
              They found reliable tenants quickly and handled all the paperwork
              effortlessly."
            </p>
            <p className="testimonial-name">Aman Ali</p>
            <p className="testimonial-location">Gurgaon, Haryana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
