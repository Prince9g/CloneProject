import React from 'react';

const Career = () => {
  return (
    <div className="career-page">
      <div className="job-cards">
        <div className="job-card">
          <span className="badge">Urgent Hiring</span>
          <h3 className="job-title">Sales Executive</h3>
          <p className="job-description">
            Join our dynamic sales team and drive success in sales, customer satisfaction, and deal closure.
          </p>
          <p className="job-location"><strong>Location:</strong> Noida</p>
          <p className="job-positions"><strong>Open Positions:</strong> 10+</p>
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="job-card">
          <span className="badge">Urgent Hiring</span>
          <h3 className="job-title">Sales Executive</h3>
          <p className="job-description">
            Join our dynamic sales team and drive success in sales, customer satisfaction, and deal closure.
          </p>
          <p className="job-location"><strong>Location:</strong> Gurugram</p>
          <p className="job-positions"><strong>Open Positions:</strong> 10+</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>

      <div className="career-links">
        <div className="link-card">
          <h4>Property In India</h4>
          <ul>
            <li>Property in Noida</li>
            <li>Property in Gurgaon</li>
            <li>Property in Goa</li>
          </ul>
          <button className="read-more-btn">Read more</button>
        </div>
        <div className="link-card">
          <h4>Real Estate In India</h4>
          <ul>
            <li>Real Estate in Noida</li>
            <li>Real Estate in Gurgaon</li>
            <li>Real Estate in Goa</li>
          </ul>
          <button className="read-more-btn">Read more</button>
        </div>
        <div className="link-card">
          <h4>Flats In Noida</h4>
          <ul>
            <li>Flats in Noida</li>
            <li>Flats in Gurgaon</li>
            <li>Flats in Goa</li>
          </ul>
          <button className="read-more-btn">Read more</button>
        </div>
        <div className="link-card">
          <h4>Real Estate Developers In India</h4>
          <ul>
            <li>Paras Buildtech</li>
            <li>M3M Group</li>
            <li>Godrej Properties</li>
          </ul>
          <button className="read-more-btn">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Career;
