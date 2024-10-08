import "./NavBar.css";
import OVM_logo from "../../assets/OrbitView_Media-removebg-preview.png";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top" style={{ background: "#000d20" }}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand poppins-bold" href="#">
          <img src={OVM_logo} alt="Logo" className="mr-2" height={45} />
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
          style={{ border: "1px solid white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav bottom-nav ms-auto mt-2">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products/Services
              </a>
              <div className="dropdown-menu mega-menu" aria-labelledby="productsDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h5>Product Line A</h5>
                    <a className="dropdown-item" href="#">Product 1</a>
                    <a className="dropdown-item" href="#">Product 2</a>
                  </div>
                  <div className="col-md-4">
                    <h5>Product Line B</h5>
                    <a className="dropdown-item" href="#">Product 3</a>
                    <a className="dropdown-item" href="#">Product 4</a>
                  </div>
                  {/* Add more columns if you wish but do it at your own risk */}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
              <div className="dropdown-menu mega-menu" aria-labelledby="solutionsDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h5>Solution A</h5>
                    <a className="dropdown-item" href="#">Solution 1</a>
                    <a className="dropdown-item" href="#">Solution 2</a>
                  </div>
                  <div className="col-md-4">
                    <h5>Solution B</h5>
                    <a className="dropdown-item" href="#">Solution 3</a>
                    <a className="dropdown-item" href="#">Solution 4</a>
                  </div>
                  {/* Add more columns if you wish but do it at your own risk */}

                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="technologyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technology
              </a>
              <div className="dropdown-menu mega-menu" aria-labelledby="technologyDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h5>Tech A</h5>
                    <a className="dropdown-item" href="#">Tech 1</a>
                    <a className="dropdown-item" href="#">Tech 2</a>
                  </div>
                  <div className="col-md-4">
                    <h5>Tech B</h5>
                    <a className="dropdown-item" href="#">Tech 3</a>
                    <a className="dropdown-item" href="#">Tech 4</a>
                  </div>
                  <div className="col-md-4">
                    <h5>Innovation</h5>
                    <a className="dropdown-item" href="#">Innovation 1</a>
                    <a className="dropdown-item" href="#">Innovation 2</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search">
                <FaSearch />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav top-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="resourceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resource Center
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourceDropdown">
                <li><a href="#" className="dropdown-item">Careers</a></li>
                <li><a className="dropdown-item" href="#">Guides</a></li>
                <li><a className="dropdown-item" href="#">Whitepapers</a></li>
                <li><a className="dropdown-item" href="#">Case Studies</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="investorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Investor Info
              </a>
              <ul className="dropdown-menu" aria-labelledby="investorDropdown">
                <li><a className="dropdown-item" href="#">Financial Reports</a></li>
                <li><a className="dropdown-item" href="#">Investor Relations</a></li>
                <li><a className="dropdown-item" href="#">Stock Information</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="newsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News Room
              </a>
              <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                <li><a className="dropdown-item" href="#">Press Releases</a></li>
                <li><a className="dropdown-item" href="#">Media Coverage</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><a className="dropdown-item" href="#">Our Mission</a></li>
                <li><a className="dropdown-item" href="#">Our Team</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
              </ul>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
