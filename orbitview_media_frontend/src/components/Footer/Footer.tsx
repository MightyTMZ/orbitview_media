import "./Footer.css";
import "../../fonts/Poppins.css";
import Links from "../Links";
// import { FaRegUserCircle } from "react-icons/fa"; // individuals
// import { MdFamilyRestroom } from "react-icons/md"; // families
// import { PiStudent } from "react-icons/pi"; // students
// import { FaUniversity } from "react-icons/fa"; // academic institutions
// import { RiGovernmentFill } from "react-icons/ri"; // university

function Footer() {
  const productAndServices = Links.productsAndServices;
  const solutions = Links.solutions;
  const resourceCenter = Links.resourceCenter;
  const newsRoom = Links.newsRoom;
  const investorInformation = Links.investInformation;
  const aboutUs = Links.aboutUs;
  const community = Links.community;
  const support = Links.support;

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">OrbitView</h5>
            <p className="about-para">
              Pioneering the future of professional networking and innovation.
              We’ve combined the optimal aspects of social media, AR/VR
              technology, and immersive learning to create a platform that goes
              beyond traditional boundaries, one for knowledge, immersion, and
              growth for the upcoming innovators, entrepreneurs, and leaders.
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Products and Services
            </h5>

            {productAndServices.map((creation) => (
              <p key={creation.id}>
                <a
                  href={creation.endpoint}
                  className="text-light text-decoration-none"
                >
                  {creation.title}
                </a>
              </p>
            ))}
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">Solutions</h5>
            {solutions.map((solution) => (
              <p key={solution.id}>
                <a
                  href={solution.endpoint}
                  className="text-light text-decoration-none"
                >
                  {solution.title}
                </a>
              </p>
            ))}
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">Resources</h5>
            {resourceCenter.map((resource) => (
              <p key={resource.id}>
                <a
                  href={resource.endpoint}
                  className="text-light text-decoration-none"
                >
                  {resource.title}
                </a>
              </p>
            ))}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Investor Info
            </h5>
            {investorInformation.map((info) => (
              <p key={info.id}>
                <a
                  href={info.endpoint}
                  className="text-light text-decoration-none"
                >
                  {info.title}
                </a>
              </p>
            ))}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">News Room</h5>
            {newsRoom.map((news) => (
              <p key={news.id}>
                <a
                  href={news.endpoint}
                  className="text-light text-decoration-none"
                >
                  {news.title}
                </a>
              </p>
            ))}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
            {aboutUs.map((news) => (
              <p key={news.id}>
                <a
                  href={news.endpoint}
                  className="text-light text-decoration-none"
                >
                  {news.title}
                </a>
              </p>
            ))}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">Community</h5>
            {community.map((community) => (
              <p key={community.id}>
                <a
                  href={community.endpoint}
                  className="text-light text-decoration-none"
                >
                  {community.title}
                </a>
              </p>
            ))}
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 poppins">
            <h5 className="text-uppercase mb-4 font-weight-bold">Support</h5>
            {support.map((support) => (
              <p key={support.id}>
                <a
                  href={support.endpoint}
                  className="text-light text-decoration-none"
                >
                  {support.title}
                </a>
              </p>
            ))}
          </div>
          {/* Social Media Links 
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
          </div>*/}
        </div>

        {/* Copyright */}
        <div className="row mt-5 poppins-bold">
          <div className="col-md-12 text-center ">
            <p className="text-light copyright">
              &copy; {new Date().getFullYear()} OrbitView Corporation. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
