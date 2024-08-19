import "./NavBar.css";
import "../../fonts/Poppins.css";
import OVM_logo from "../../assets/OrbitView_Media-removebg-preview.png";

const NavBar = () => {

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand poppins-bold" href="#home">
          <img src={OVM_logo} alt="Logo" className="mr-2" height={45} />
          <span className="ml-2">OrbitView Media</span>
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto poppins">
            
            <li className="nav-item">
              <a className="nav-link" href="#techonomics">
                Techonomics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pathways">
                Pathways
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#engineering">
                Engineering
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Who We Are
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#join">
                Join Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
