import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./JobListings.css";

const jobs = [
  {
    id: 1,
    title: "Social Media Manager",
    location: "Remote",
    description:
    `We are looking for a someone who specializes in managing social media pages to drive more traffic and traction for our social media pages.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },
  {
    id: 2,
    title: "Marketing Specialists",
    location: "Remote",
    description:
      "Have proficient skill in SEO, brand identity, social media marketing, advertisement. Apply now!",
    applyLink: "mailto:admin@orbitviewmedia.com",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    description:
      "Join our team as a UI/UX Designer to create intuitive, user-centric designs for our web and mobile platforms. If you are based in Toronto, it will be an asset on your application.",
    applyLink: "mailto:admin@orbitviewmedia.com",
  },
  {
    id: 4,
    title: "Content Producer",
    location: "Hybrid",
    description:
      "Interested in producing content like videos, podcasts, TikTok's, reels, and more? Apply to OrbitView to start or boost your journey today!",
    applyLink: "mailto:admin@orbitviewmedia.com",
  },
  {
    id: 5,
    title: "Outreach",
    location: "Hybrid",
    description:
      "As an outreach member, you will be given the privilege to reach out to major organizations (e.g. Y Combinator, TechCrunch) on behalf of OrbitView. ",
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

];

const JobListings: React.FC = () => {
  return (
    <>
    <NavBar/>
        <div className="job-listings-screen poppins">
          <h1 className="job-listings-title">Available roles</h1>
          <p className="job-listings-intro">
            Explore our current job and role openings and be part of OrbitView.<br/>
            Pay and compensation will be based piece-rated and effort based.
            Interested in applying? Email <a href="mailto:admin@orbitviewmedia.com" style={{ textDecoration: "none" }}>admin@orbitviewmedia.com</a>
            </p>
          <div className="job-listings-container">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h2 className="job-title">{job.title}</h2>
                <p className="job-location">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="job-description">{job.description}</p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-btn"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default JobListings;
