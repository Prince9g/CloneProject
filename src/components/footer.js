import React from 'react';


const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-column">
            <h5>Company Name</h5>
            <ul className="footer-nav">
              <li className="footer-item">
                <a href="#" className="footer-link">HOME</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">SERVICES</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">PROJECTS</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">ABOUT US</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">BRANDS</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>HEAD OFFICE</h5>
            <ul className="footer-nav">
              <li className="footer-item">
                <p>A-1020, 10TH FLOOR, TOWER-A, ATS BOUOUET, PLOT NO A212. SECTOR-132,NOIDA GAUTAM BUDDHA NAGAR U.P</p>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">+91 7428 063 567</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>SOCIAL</h5>
            <ul className="footer-nav">
              <li className="footer-item">
                <a href="#" className="footer-link">Facebook</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Instagram</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Inquiries</h5>
            <button className="footer-button">CONTACT</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;