import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import "../../fonts/Poppins.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiCalendly } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { TbMail, TbWriting } from "react-icons/tb";

const ContactPage = () => {
  let pageName = "Contact";

  document.title = `${pageName} - OrbitView Media`;

  return (
    <>
      <NavBar />
      <div className="contact-page-container poppins">
        <div className="container text-center mt-5">
          <h1 className="mb-4 display-4 text-primary poppins">Contact us</h1>
          <p className="mb-5 text-left">
            We are open to any one interested in getting in touch with us.
            Whether you are an interested partner, investor, venture capitalist,
            interested intern/employee, content creator, do not be afraid to
            contact us! There are no bad questions or requests
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="contact-info mb-4">
                <ul className="list-unstyled text-start">
                  <li className="mb-2">
                    <i className="bi bi-envelope"></i>
                    <a
                      href="mailto:admin@orbitviewmedia.com"
                      className="ms-2 text-decoration-none text-dark"
                    >
                      <TbMail /> Email:{" "}
                      <strong>admin@orbitviewmedia.com</strong> <br />
                      <FaInstagram /> Instagram:{" "}
                      <a href="https://instagram.com/orbitview_media">
                        <strong>@orbitview_media</strong>
                      </a>
                      <br />
                      <FaTwitter /> Twitter (X):{" "}
                      <a href="https://x.com/OrbitViewMedia">
                        <strong>@OrbitViewMedia</strong>
                      </a>
                      <br />
                      <FaLinkedin /> LinkedIn:{" "}
                      <a href="https://www.linkedin.com/company/orbitview-media/">
                        <strong>OrbitView Media</strong>
                      </a>
                      <br />
                      <TbWriting /> Blog:{" "}
                      <a href="/#blog">
                        <strong>OrbitView</strong>
                      </a>
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-geo-alt"></i>
                    <a
                      href="https://www.google.com/maps/place/OrbitView+Media"
                      className="ms-2 text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Toronto, Canada
                    </a>
                  </li>
                </ul>
                <hr />
                <ul className="list-unstyled text-start">
                  <li>
                    Tom Zhang &nbsp;&nbsp;{" "}
                    <a
                      href="tom.zhang.career@hotmail.com"
                      className="founder-contact"
                      title="Email: Tom Zhang"
                    >
                      <MdEmail />
                    </a>
                    &nbsp;
                    <a
                      href="https://www.linkedin.com/in/tom-zhang-485341274/"
                      className="founder-contact"
                      title="LinkedIn: Tom Zhang"
                    >
                      <FaLinkedin />
                    </a>
                    &nbsp;
                    <a
                      href="https://twitter.com/OrbitTommyZ"
                      className="founder-contact"
                      title="Twitter (X): Tom Zhang"
                    >
                      <FaTwitter />
                    </a>
                    &nbsp;
                    <a
                      href="https://calendly.com/tom-zhang-career"
                      className="founder-contact"
                      title="Calendly: Tom Zhang"
                    >
                      <SiCalendly />
                    </a>
                    &nbsp;
                    <a
                      href="https://tomzhang.vercel.app/#/connect-with-me"
                      className="founder-contact"
                      title="Website: Tom Zhang"
                    >
                      <CiGlobe />
                    </a>
                    &nbsp;
                    <a
                      href="tel:+14372476482"
                      className="founder-contact"
                      title="Phone: Tom Zhang"
                    >
                      <FaPhoneAlt />
                    </a>
                  </li>
                  <li>
                    Jerone Arristan{" "}
                    <a
                      href="jeronearristan@gmail.com"
                      className="founder-contact"
                      title="Email: Jerone Arristan"
                    >
                      <MdEmail />
                    </a>
                    &nbsp;
                    <a
                      href="https://www.linkedin.com/in/jerone-arristan-376636212/"
                      className="founder-contact"
                      title="LinkedIn: Jerone Arristan"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="tel:+16476086420"
                      className="founder-contact"
                      title="Phone: Jerone Arristan"
                    >
                      <FaPhoneAlt />
                    </a>
                  </li>
                  <li>
                    Aurick Anwar{" "}
                    <a
                      href="aurickanwar2260biga@gmail.com"
                      className="founder-contact"
                      title="Email: Aurick Anwar"
                    >
                      <MdEmail />
                    </a>
                    &nbsp;
                    <a
                      href="https://www.linkedin.com/in/aurick-anwar/"
                      className="founder-contact"
                      title="LinkedIn: Aurick Anwar"
                    >
                      <FaLinkedin />
                    </a>
                    &nbsp;
                  </li>
                </ul>
              </div>
              {/*<h3 className="text-dark mt-5">Follow Us</h3>
              <p className="mb-4">Stay connected with us on social media:</p>
              <div className="d-flex justify-content-center">
                 Instagram Dropdown 
                <div className="dropdown me-2">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    id="instagramDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-instagram"></i> Instagram
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="instagramDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/orbitview_media/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Media
                      </a>
                    </li>
                  </ul>*/}

              {/*<li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/orbitviewtechonomics"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Techonomics
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/orbitviewengineering"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/orbitviewpathways"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Pathways
                      </a>
                    </li>
                  </ul>
                </div>
                 YouTube Dropdown 
                  <div className="dropdown me-2">
                    <button
                      className="btn btn-outline-danger dropdown-toggle"
                      type="button"
                      id="youtubeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-youtube"></i> YouTube
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="youtubeDropdown">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.youtube.com/c/OrbitViewTechonomics"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OrbitView Techonomics
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.youtube.com/c/OrbitViewEngineering"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OrbitView Engineering
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.youtube.com/c/OrbitViewPathways"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OrbitView Pathways
                        </a>
                      </li>
                    </ul>
                  </div>*/}
              {/* TikTok Dropdown
                  <div className="dropdown me-2">
                    <button
                      className="btn btn-outline-dark dropdown-toggle"
                      type="button"
                      id="tiktokDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-tiktok"></i> TikTok
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="tiktokDropdown">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.tiktok.com/@orbitviewtechonomics"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OrbitView Techonomics
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.tiktok.com/@orbitviewengineering"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OrbitView Engineering
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.tiktok.com/@orbitviewpathways"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OrbitView Pathways
                        </a>
                      </li>
                    </ul>
                  </div> */}
              {/* Substack Dropdown 
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="substackDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-file-earmark-text"></i> Substack
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="substackDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://orbitviewtechonomics.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Techonomics
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://orbitviewengineering.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://orbitviewpathways.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OrbitView Pathways
                      </a>
                    </li>
                  </ul>*/}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
