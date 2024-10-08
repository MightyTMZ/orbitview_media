import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SubstackFeed from "./OVTSubstack";
import techonomics1 from "../../assets/technology.png";
import "../../fonts/Poppins.css"
import "./Techonomics.css";

const TechonomicsLandingPage = () => {
  let pageName = "Techonomics";

  document.title = `${pageName} - OrbitView Media`

  return (
    <>
      <NavBar />
      <main className="techonomics-page poppins">
        {/* Hero Section */}
        <section className="ovt-hero-section">
          <div className="ovt-hero-content">
            <h1 className="ovt-hero-title">OrbitView Techonomics</h1>
            <p className="ovt-hero-subtitle">
              Where Technology Meets Economics
            </p>
            <p className="ovt-hero-description">
              Dive deep into the intersection of cutting-edge technology and
              economic strategies. Stay ahead with industry insights, trends,
              and case studies that matter.
            </p>
          </div>
        </section>
        {/* About Section */}
        <section className="ovt-about-section">
          <div className="ovt-about-content">
            <h2 className="ovt-section-title">About OrbitView Techonomics</h2>
            <p className="ovt-section-description">
              OrbitView Techonomics is your go-to resource for exploring how
              technology impacts global economies. From Web3 and crypto to
              venture capital and tech hubs, we provide actionable insights that
              shape the future.
            </p>
          </div>
          <img src={techonomics1} alt="The future of techology + economics (techonomics)" height={100}/>
        </section>
        {/* Future Content Sections */}
        <section className="ovt-upcoming-content">
          <SubstackFeed></SubstackFeed>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TechonomicsLandingPage;
