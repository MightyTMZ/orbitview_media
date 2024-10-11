import "./ComingSoon.css";
import "../../fonts/Poppins.css";
import { FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import OrbitButton from "../../components/OrbitButton/OrbitButton";


const ComingSoon = () => {

  const exploreJobsEndpoint = "/#jobs"


  return (
    <div className="coming-soon-container poppins">
      <h1 className="coming-soon-title">Coming Soon!</h1>
      <p className="coming-soon-message">
        We're working hard to bring you innovative solutions. Stay tuned!
      </p>

      <div className="cta-container">
        <OrbitButton text="Join Waitlist" hoverText="It takes 30 seconds" endpoint="/#join"/>
        <p className="mt-3 social-media-text">Follow us for updates:</p>
        <div className="social-media-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter/>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin/>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagramSquare/>
          </a>
        </div>
        <p className="pt-4 coming-soon-message">
        Want to join our team? Explore our current openings <a href="/#jobs">here</a>
      </p>
      </div>
    </div>
  );
};

export default ComingSoon;
