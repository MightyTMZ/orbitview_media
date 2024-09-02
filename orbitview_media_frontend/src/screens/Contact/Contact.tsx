import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import "../../fonts/Poppins.css";


const ContactPage = () => {

  let pageName = "Contact";

  document.title = `${pageName} - OrbitView Media`

  return (
    <>
    <NavBar/>
        <div className="contact-page-container poppins">
          <div className="container text-center mt-5">
            <h1 className="mb-4 display-4 text-primary">Contact OrbitView Media</h1>
            <p className="lead mb-5">
              Get in touch with us through our various channels or follow us on
              social media!
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="contact-info mb-4">
                  <h3 className="text-dark">Contact Details</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-envelope"></i>
                      <a
                        href="mailto:contact@orbitviewmedia.com"
                        className="ms-2 text-decoration-none text-dark"
                      >
                        orbitview_media@hotmail.com
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
                        North York, Toronto, Canada
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="text-dark mt-5">Follow Us</h3>
                <p className="mb-4">Stay connected with us on social media:</p>
                <div className="d-flex justify-content-center">
                  {/* Instagram Dropdown */}
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
                  {/* YouTube Dropdown */}
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
                  </div>
                  {/* TikTok Dropdown */}
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
                  </div>
                  {/* Substack Dropdown */}
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default ContactPage;
