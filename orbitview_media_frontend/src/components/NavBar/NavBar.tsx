import "./NavBar.css";
import "../../fonts/Poppins.css";
import OVM_logo from "../../assets/OrbitView_Media-removebg-preview.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TbWriting } from "react-icons/tb";
import { MdWork } from "react-icons/md";

// import AccountInfo from "../AccountInfo/AccountInfo";
// temporarily shut down for the MVP

const NavBar = () => {
  // let isAuthenticated = localStorage.getItem('isAuthenticated');

  const discordInviteLink = "https://discord.gg/3DcBFDxW";
  const instagramLink = "https://www.instagram.com/orbitview_media/";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand poppins-bold" href="#">
          <img src={OVM_logo} alt="Logo" className="mr-2" height={45} />
          <span className="ml-2" style={{ fontSize: "1.6rem" }}>OrbitView</span>
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href={instagramLink}>
                    Instagram <FaInstagram />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={discordInviteLink}>
                    Discord <FaDiscord />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.linkedin.com/company/orbitview-media/"
                  >
                    LinkedIn <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://x.com/OrbitViewMedia"
                  >
                    Twitter (X) <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#/blog">
                    Blog <TbWriting />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#/events">
                    Upcoming Events <CiCalendarDate />
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/#/jobs">
                    Opportuntities at OrbitView <MdWork />
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Content
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#/techonomics">
                    Techonomics <GrTechnology/>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#/engineering">
                    Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#/pathnetwork">
                    PathNetwork
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#jobs">
                Jobs
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
            {/*{isAuthenticated ? (
              <AccountInfo />
            ) : (
              <>
              <li className="nav-item">
                <a className="nav-link" href="#login">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#signup">
                  Sign up
                </a>
              </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
