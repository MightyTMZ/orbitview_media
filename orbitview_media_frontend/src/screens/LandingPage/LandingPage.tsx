import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PartnersWidget from "../../components/Partners/Partners";
import OVM_logo from "../../assets/OrbitView_Media-removebg-preview.png";
import "../../fonts/Poppins.css";
import "./LandingPage.css";
import OrbitButton from "../../components/OrbitButton/OrbitButton";
// import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import AboutUs from "../AboutUs/AboutUs";

const LandingPage = () => {
  let pageName = "Home";

  document.title = `${pageName} - OrbitView`;

  // const navigate = useNavigate();

  // const faqs = document.getElementById("faqs");

  return (
    <>
      <NavBar />{" "}
      <main className="landing-page">
        {/* Hero Section */}
        <div className="hero-section text-center">
          <h1 className="display-4" id="main-heading">
            <ReactTyped
              className="poppins-bold"
              strings={["ORBITVIEW"]}
              typeSpeed={50}
            />
          </h1>
          <p className="lead poppins-thin">
            An ultra-immersive 3D professional networking platform, autonomous
            AI networking for you, and a content hub that transforms knowledge
            absorption into an experience rather than a chore.
            <br />
            Turning your network of individuals to an "orbit" of like-minded individuals!
          </p>
          <img src={OVM_logo} alt="OrbitView Media logo" height={100} />
          <br />
          <OrbitButton />

          {/* Main Content with Icons
          <div className="content-box container mt-5">
            <div className="row justify-content-center">
              {/*<div
                className="col-md-2 text-center welcome-widget"
                onClick={() => faqs?.scrollIntoView({ behavior: "smooth" })}
              >
                <i className="fas fa-info-circle fa-3x mb-2"></i>
                <h6>About Us</h6>
              </div>*/}
          {/*
                <div
                  className="col-md-2 text-center welcome-widget"
                  onClick={() => navigate("/techonomics")}
                >
                  <i className="fas fa-chart-line fa-3x mb-2"></i>
                  <h6>Technomics</h6>
                </div>
                <div
                  className="col-md-2 text-center welcome-widget"
                  onClick={() => navigate("/pathnetwork")}
                >
                  <i className="fas fa-project-diagram fa-3x mb-2"></i>{" "}
                  <h6>PathNetwork</h6>
                </div>
                <div
                  className="col-md-2 text-center welcome-widget"
                  onClick={() => navigate("/engineering")}
                >
                  <i className="fas fa-cogs fa-3x mb-2"></i>
                  <h6>Engineering</h6>
                </div>
             
              <div
                className="col-md-2 text-center welcome-widget"
                onClick={() => navigate("/events")}
              >
                <i className="fas fa-calendar-alt fa-3x mb-2"></i>
                <h6>Events and Calendar</h6>
              </div>
              <div
                className="col-md-2 text-center welcome-widget"
                onClick={() => navigate("/join")}
              >
                <i className="fas fa-users fa-3x mb-2"></i>
                <h6>Join Us Today!</h6>
              </div>
            </div>
          </div> */}
          <div className="mt-3"></div>
        </div>
        {/* <FAQs /> */}
        <AboutUs />
        <PartnersWidget />
      </main>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
