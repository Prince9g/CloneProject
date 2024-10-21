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
                <p>Unit no 202-203, Suncity Business Tower, Near Sector 54 Chowk Metro Station, Gurugram - 122002</p>
              </li>
              <li className="footer-item">
                <a href="mailto:marketing@grandview.consulting" className="footer-link">marketing@grandview.consulting</a>
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
            <button className="footer-button">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;