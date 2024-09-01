import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SubstackFeed from "./OVPSubstack";
import "./Pathways.css";

const PathwaysLandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="pathways-page">
        {/* Hero Section */}
        <section className="ovp-hero-section text-start">
          <div className="ovp-hero-content container">
            <h1 className="ovp-hero-title">OrbitView Pathways</h1>
            <p className="ovp-hero-subtitle">
              Where career guidance and growth opportunities come to you!
            </p>
            <p className="ovp-hero-description">
              Whether you are a student or seasoned professional, you belong
              with us! With a professional hub and network, we will help you
              navigate the complex landscape of career planning, skill
              development, and professional growth. Our tailored guidance and
              expert insights, you can confidently navigate your growth path and
              unlock new opportunities for success.
            </p>
          </div>
        </section>
        {/* About Section */}
        <section className="ovp-about-section">
          <div className="ovp-about-content">
            <h2 className="ovp-section-title">About Pathways</h2>
            <p className="ovp-section-description">
              Our tailored guidance and expert insights, you can confidently
              navigate your growth path and unlock new opportunities for
              success. Join us today!
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

export default PathwaysLandingPage;
