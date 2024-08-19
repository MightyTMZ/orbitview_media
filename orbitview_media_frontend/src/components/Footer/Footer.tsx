import './Footer.css';
import "../../fonts/Poppins.css"

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">OrbitView Media</h5>
            <p className='about-para'>
              Expanding horizons, elevating perspectives. OrbitView Media brings together technology, economics, career development, and post-secondary pathways.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <p>
              <a href="#about" className="text-light text-decoration-none">About Us</a>
            </p>
            <p>
              <a href="#team" className="text-light text-decoration-none">Meet the Team</a>
            </p>
            <p>
              <a href="#events" className="text-light text-decoration-none">Events</a>
            </p>
            <p>
              <a href="#join" className="text-light text-decoration-none">Join Us</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold poppins connect-with-us">Connect with Us</h5>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-logo text-light me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-logo text-light me-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-logo text-light me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-logo text-light">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="row mt-5 poppins-bold">
          <div className="col-md-12 text-center ">
            <p className="text-light copyright">
              &copy; {new Date().getFullYear()} OrbitView Media. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
