import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./JobDetail.css";

interface JobDetailProps {
  title: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  applyLink: string;
}

const JobDetail: React.FC<JobDetailProps> = ({
  title,
  location,
  description,
  requirements,
  salary,
  applyLink,
}) => {
  return (
    <>
      <NavBar />
      <div className="job-detail-page">
        <div className="job-detail-container">
          <h1 className="job-detail-title">{title}</h1>
          <p className="job-detail-location">
            <strong>Location:</strong> {location}
          </p>
          <p className="job-detail-salary">
            <strong>Salary:</strong> {salary}
          </p>
          <div className="job-detail-description">
            <h3>Job Description</h3>
            <p>{description}</p>
          </div>
          <div className="job-detail-requirements">
            <h3>Requirements</h3>
            <ul>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="apply-now-btn"
          >
            Apply Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
