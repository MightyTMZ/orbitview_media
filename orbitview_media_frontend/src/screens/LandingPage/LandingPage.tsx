import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
// import PartnersWidget from "../../components/Partners/Partners";
import OrbitViewLogo from "../../assets/OrbitView_Media-removebg-preview.png";
import "../../fonts/Poppins.css";
import "./LandingPage.css";
import OrbitButton from "../../components/OrbitButton/OrbitButton";
// import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
// import AboutUs from "../AboutUs/AboutUs";

import { useState, Fragment, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  let pageName = "Home";

  document.title = `${pageName} - OrbitView`;

  const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  // const faqs = document.getElementById("faqs");

  useEffect(() => {
    // This timeout represents a loading period, e.g., waiting for assets to load.
    const loadTimeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (or when an API finishes)
    }, 1000); // Adjust the delay time as needed

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageName} - OrbitView</title>
        <meta
          name="description"
          content="OrbitView is offering innovative solutions that redefine how you connect, learn, and grow. From matching tools to personalized insights in capital markets, our platform provides individuals, families, and businesses to engage and grow meaningfully."
        />
        <meta
          name="keywords"
          content="OrbitView, ai, technology, capital markets, learning, innovation, business solutions"
        />
        <meta name="author" content="OrbitView" />
        <link rel="canonical" href="https://orbitview.vercel.app" />
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <NavBar />
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
                OrbitView is a unified tech platform for learning new skills,
                connecting with others, and pushing you to gain real-world
                experience—all at the same time. 
              </p>
              <img src={OrbitViewLogo} alt="OrbitView logo" height={250} />
              <br />
              <OrbitButton
                text="Get Started"
                hoverText="Launch into orbit today!"
                endpoint="/join"
              />
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
            {/* <FAQs /> 
            <AboutUs />
            <PartnersWidget />*/}
            <div style={{ height: "100px" }}></div>
          </main>
          <Footer></Footer>
        </Fragment>
      )}
    </>
  );
};

export default LandingPage;
