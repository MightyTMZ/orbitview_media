import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SubstackFeed from "./OVESubstack";
import "../../fonts/Poppins.css"
import "./Engineering.css";

const EngineeringLandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="pathways-page poppins">
        {/* Hero Section */}
        <section className="ovp-hero-section text-start">
          <div className="ovp-hero-content">
            <h1 className="ovp-hero-title">OrbitView Engineering</h1>
            <p className="ovp-hero-subtitle">
              Where we celebrate engineers and this ever-evolving landscape!
            </p>
            <p className="ovp-hero-description">
              Engineers build the world! So let us celebrate them by p
              comprehensive resources, expert insights, and growth opportunities
              for those passionate about engineering disciplines—from mechanical
              and civil to software and aerospace engineering. Whether you are a
              student or an engineer with decades of experience, you belong with
              us!
            </p>
          </div>
        </section>
        {/* About Section */}
        <section className="ovp-about-section">
          <div className="ovp-about-content">
            <h2 className="ovp-section-title">About Engineering</h2>
            <p className="ovp-section-description">
              OrbitView Engineering is your go-to resource for engineering! We
              have a wealth of content that includes industry news, cutting-edge
              research, and in-depth insights from top-tier experts.
            </p>
          </div>
        </section>
        {/* Future Content Sections */}
        <section className="ovp-upcoming-content">
          <SubstackFeed></SubstackFeed>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EngineeringLandingPage;
