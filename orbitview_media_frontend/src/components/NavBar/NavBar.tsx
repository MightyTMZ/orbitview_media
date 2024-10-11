import "./NavBar.css";
import OVM_logo from "../../assets/OrbitView_Media-removebg-preview.png";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa"; // individuals
import { MdEnergySavingsLeaf, MdFamilyRestroom } from "react-icons/md"; // families
import { PiStudent } from "react-icons/pi"; // students
import { FaUniversity } from "react-icons/fa"; // academic institutions
import { RiGovernmentFill } from "react-icons/ri"; // university

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md sticky-top"
      style={{ background: "#000d20" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand poppins-bold" href="/">
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
          <span
            className="navbar-toggler-icon"
            style={{ color: "white" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav bottom-nav ms-auto mt-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products/Services
              </a>
              <div
                className="dropdown-menu mega-menu"
                aria-labelledby="productsDropdown"
                id="productsDropdown"
                style={{ background: "#000d20", padding: "20px" }}
              >
                {/* Add the 'row' class here for proper Bootstrap grid behavior */}
                <div className="row megadropdown-row">
                  <div className="col-md-4 has-right-margin-row">
                    <h5>OrbitView Premium</h5>
                    <a className="dropdown-item" href="#">
                      Basic Premium
                    </a>
                    <a className="dropdown-item" href="#">
                      Pro Premium
                    </a>
                    <a className="dropdown-item" href="#">
                      Executive Premium
                    </a>
                  </div>
                  <div className="col-md-4">
                    <h5>Other</h5>
                    <a className="dropdown-item" href="#">
                      Quiztrepreneur
                    </a>
                    <a className="dropdown-item" href="#">
                      Techonomics
                    </a>
                    <a className="dropdown-item" href="#">
                      OrbitView Nexus
                    </a>
                    <a className="dropdown-item" href="#">
                      StarFindr AI
                    </a>
                    <a className="dropdown-item" href="#">
                      MarketSentinel AI
                    </a>
                    <a className="dropdown-item" href="#">
                      PitchBot AI
                    </a>
                    <a className="dropdown-item" href="#">
                      AutoPilot
                    </a>
                  </div>
                  {/* Add more columns if necessary */}
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
              <a className="dropdown-item" href="#">
                      For Individuals <FaRegUserCircle />
                    </a>
                    <a className="dropdown-item" href="#">
                      For Families <MdFamilyRestroom />
                    </a>
                    <a className="dropdown-item" href="#">
                      For Students <PiStudent />
                    </a>
                    <a className="dropdown-item" href="#">
                      For Businesses <FaUniversity />
                    </a>
                    <a className="dropdown-item" href="#">
                      For Governments <RiGovernmentFill />
                    </a>
              </ul>

              {/*<div
                className="dropdown-menu mega-menu"
                aria-labelledby="solutionsDropdown"
                id="solutionsDropdown"
                style={{ background: "#000d20", padding: "20px" }}
              >
                <div className="row megadropdown-row">
                  <div className="col-md-4 has-right-margin-row">
                    <h5>OrbitView Media</h5>
                    <a className="dropdown-item" href="#">
                      Technology
                    </a>
                    <a className="dropdown-item" href="#">
                      Economics
                    </a>
                    <a className="dropdown-item" href="#">
                      See all topics {/* We can make a further dropdown here 
                    </a>
                    {/* 
                    - OrbitView Technology
                    - OrbitView Economics
                    - OrbitView Business
                    - OrbitView Politics (risky)
                    
                    
                   
                  </div> 
                  <div className="col-md-4">
                    <h5>Solutions for: </h5>
                    <a className="dropdown-item" href="#">
                      Individuals <FaRegUserCircle />
                    </a>
                    <a className="dropdown-item" href="#">
                      Families <MdFamilyRestroom />
                    </a>
                    <a className="dropdown-item" href="#">
                      Students <PiStudent />
                    </a>
                    <a className="dropdown-item" href="#">
                      Businesses <FaUniversity />
                    </a>
                    <a className="dropdown-item" href="#">
                      Governments <RiGovernmentFill />
                    </a>
                  </div>
                  {/* Add more columns if you wish but do it at your own risk 
                </div>
              </div>*/}
            </li>
            {/*<li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="technologyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technology
              </a>
              <div
                className="dropdown-menu mega-menu"
                aria-labelledby="technologyDropdown"
                id="technologiesDropdown"
                style={{ background: "#000d20", padding: "20px" }}
              >
                <div className="megadropdown-row row">
                  <div className="col-md-4 has-right-margin-row">
                    <h5>Artificial Intelligence & Development</h5>
                    <a className="dropdown-item" href="#">
                      Tech 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Tech 2
                    </a>
                  </div>
                  <div className="col-md-4 has-right-margin-row">
                    <h5>Tech B</h5>
                    <a className="dropdown-item" href="#">
                      Tech 3
                    </a>
                    <a className="dropdown-item" href="#">
                      Tech 4
                    </a>
                  </div>
                  <div className="col-md-4">
                    <h5>Innovation</h5>
                    <a className="dropdown-item" href="#">
                      Innovation 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Innovation 2
                    </a>
                  </div>
                </div>
              </div>
            </li>*/}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="technologyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technology
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="technologyDropdown"
              >
                <li className="dropdown-submenu">
                  <a
                    href="#"
                    className="dropdown-item"
                    id="aiSubmenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Artificial Intelligence
                  </a>
                  {/*<ul className="dropdown-menu" aria-labelledby="aiSubmenu" style={{ width: "auto" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        NLP
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Computer Vision
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Recommendation Systems
                      </a>
                    </li>
                  </ul>*/}
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Internet of Things (IoT)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Business Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Business Operations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Quantum Computing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Edge AI and Computing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Financial Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sustainable AI <MdEnergySavingsLeaf/>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search">
                <FaSearch />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav top-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resource Center
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourceDropdown">
                <li>
                  <a href="#" className="dropdown-item">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Technical Articles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    White Papers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Podcasts{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="investorDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Investor Info
              </a>
              <ul className="dropdown-menu" aria-labelledby="investorDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Understanding OrbitView
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Strengths
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Financial Results
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Events{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Announcements{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Regulatory News{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Financial Calendar{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Covering Analysts{" "}
                    {/* Hire people from Morgan Stanley, JPMorgan, Barclays, Bank of America, Goldman Sachs */}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Corporate Governance{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FAQs{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="newsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News Room
              </a>
              <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    In the News
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Webinars and Videos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newsletters
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Leadership
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Awards
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Environmental, Social, and Governance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    End Markets
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community{" "}
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hackathons and Competitions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ambassadors and Launch Program
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Collaborations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Orbit Web Framework
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support{" "}
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product Documentations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Community Support
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Legal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Compliance Information
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
