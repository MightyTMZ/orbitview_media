import "./Footer.css";
import "../../fonts/Poppins.css";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              OrbitView Media
            </h5>
            <p className="about-para">
              Pioneering the future of professional networking and innovation.
              We’ve combined the optimal aspects of social media, AR/VR
              technology, and immersive learning to create a platform that goes
              beyond traditional boundaries, one for knowledge, immersion, and
              growth for the upcoming innovators, entrepreneurs, and leaders.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Quick Links
            </h5>
            <p>
              <a href="#about" className="text-light text-decoration-none">
                About Us
              </a>
            </p>
            <p>
              <a href="#events" className="text-light text-decoration-none">
                Events
              </a>
            </p>
            <p>
              <a href="#join" className="text-light text-decoration-none">
                Subscribe
              </a>
            </p>
            <p>
              <a href="#jobs" className="text-light text-decoration-none">
                Jobs and Careers
              </a>
            </p>
            <p>
              <a href="#blog" className="text-light text-decoration-none">
                Read our blog!
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold poppins connect-with-us">
              Connect with Us
            </h5>
            <a
              href="https://www.instagram.com/orbitview_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo text-light me-4"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://x.com/OrbitViewMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo text-light me-4"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/orbitview-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo text-light"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5 poppins-bold">
          <div className="col-md-12 text-center ">
            <p className="text-light copyright">
              &copy; {new Date().getFullYear()} OrbitView Media. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
