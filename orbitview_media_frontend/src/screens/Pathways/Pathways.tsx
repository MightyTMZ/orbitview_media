import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SubstackFeed from "./OVPSubstack";
import careernetwork1 from "../../assets/career.png"
import careernetwork2 from "../../assets/career-pathway.png"
import "../../fonts/Poppins.css"
import "./Pathways.css";

const PathwaysLandingPage = () => {
  let pageName = "PathNetwork";

  document.title = `${pageName} - OrbitView Media`

  return (
    <>
      <NavBar />
      <main className="pathways-page poppins">
        {/* Hero Section */}
        <section className="ovp-hero-section text-start">
          <div className="ovp-hero-content container">
            <h1 className="ovp-hero-title">OrbitView PathNetwork</h1>
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
            <h2 className="ovp-section-title">About PathNetworks</h2>
            <p className="ovp-section-description">
              Our tailored guidance and expert insights, you can confidently
              navigate your growth path and unlock new opportunities for
              success. Join us today!
            </p>
          </div>
          <img src={careernetwork1} className="career-img" alt="The power of career networks"  height={100}/>
          <img src={careernetwork2} className="career-img" alt="The power of career networks" height={100}/>
        </section>
        {/* Future Content Sections */}
        <section className="ovp-upcoming-content">
          <SubstackFeed></SubstackFeed>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PathwaysLandingPage;
