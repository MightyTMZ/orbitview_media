import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import FAQs from "../FAQs/FAQs";
import OVM_logo from "../../assets/OrbitView_Media-removebg-preview.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing-page">
        {/* Hero Section */}
        <div className="hero-section text-center">
          <h1 className="display-4" id="main-heading">
            OrbitView Media
          </h1>
          <p className="lead poppins-thin">
            Expanding Horizons, Elevating Perspectives
          </p>
          <img src={OVM_logo} alt="OrbitView Media logo" height={100} />

          {/* Main Content with Icons */}
          <div className="content-box container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-2 text-center">
                <i className="fas fa-info-circle fa-3x mb-2"></i>
                <h6>About Us</h6>
              </div>
              <div className="col-md-2 text-center">
                <i className="fas fa-laptop-code fa-3x mb-2"></i>
                <h6>Technomics</h6>
              </div>
              <div className="col-md-2 text-center">
                <i className="fas fa-graduation-cap fa-3x mb-2"></i>
                <h6>Pathways</h6>
              </div>
              <div className="col-md-2 text-center">
                <i className="fas fa-cogs fa-3x mb-2"></i>
                <h6>Engineering</h6>
              </div>
              <div className="col-md-2 text-center">
                <i className="fas fa-calendar-alt fa-3x mb-2"></i>
                <h6>Events and Calendar</h6>
              </div>
              <div className="col-md-2 text-center">
                <i className="fas fa-users fa-3x mb-2"></i>
                <h6>Join Us Today!</h6>
              </div>
            </div>
          </div>
        </div>
        <FAQs />
      </div>

      <Footer></Footer>
    </>
  );
};

export default LandingPage;
