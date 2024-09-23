import "./AboutUs.css";
import masthead from "../../assets/OrbitView Media Inc. masthead (1).png";
import "../../fonts/Poppins.css";
import businessboard from "../../assets/9d7dbc5c-3636-4154-84fa-d1bba74796cd.webp"

const AboutUs = () => {
  return (
    <>
      <div style={{ height: "50px" }}></div>
      <section id="who-we-are poppins">
        <div className="container">
          <div className="row only-this-component">
            <div className="column left">
              <h1>Our Team</h1>
              <p>
                Tom Zhang (left), Jerone Arristan (top-right), and Aurick Anwar
                (bottom-left) are friends from high school. They realized that
                the world was undergoing a dramatic shift in how the new and rising generation of people have lost aceess to untapped information that could transform their lives.
                <br />
                <br />
                <h2>Our Traction</h2>
                <ul>
                  <li>
                    SwarmZero.ai partnership + workshop on decentralized AI
                    agents
                  </li>
                  <li>
                    Co-authoring book projected with{" "}
                    <strong>Y Combinator</strong> GTM Partner on Ollama, a
                    cutting edge tool to run large language models (LLMs)
                  </li>
                  <li>
                    Currently expanding our team, more information{" "}
                    <a href="/#jobs" style={{ textDecoration: "none" }}>
                      here
                    </a>
                  </li>
                </ul>
                <h2>In the process of:</h2>
                <ul>
                  <li>
                    <strong>Launching</strong> our own podcast series, featuring
                    interviews with leaders in tech, economics, and innovation.
                  </li>
                  <li>
                    <strong>Developing</strong> a subscription-based newsletter
                    with exclusive content and industry insights.
                  </li>
                  <li>
                    <strong>Organizing</strong> virtual and in-person events,
                    including career development workshops and tech innovation
                    seminars.
                  </li>
                  <li>
                    <strong>Developing</strong> "OrbitView", an app that merges
                    the professional value of LinkedIn with TikTok's engaging
                    content to help students who find traditional networks too
                    stiff and social media too distracting. OrbitView is where
                    you build your professional identity without feeling like
                    you are out of place. We are creating a space that is
                    professional, engaging, and perfectly suited for the next
                    generation of workers. This is the future of professional
                    networking—one that is dynamic, relatable, and accessible.
                  </li>
                  <li>
                    <strong>Collaborating</strong> with industry experts to
                    create comprehensive guides and cheat sheets on emerging
                    technologies and economics.
                  </li>
                </ul>
              </p>
            </div>
            <div className="column right">
              <img src={masthead} className="masthead" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="centered-section">
        <div className="container">
          {/* <h2 style={{ color: "black" }}>Our Mission</h2> */}
          <blockquote>
            "To equip individuals and firms with actionable insights and
            cutting-edge innovation, driving real-world growth and measurable
            impact. We are here to deliver results that matter."
          </blockquote>
        </div>
      </section>

      <section id="what-we-do">
        <div className="container">
          <h2>What We Do</h2>
          <div className="row only-this-component">
            <div className="column">
              <h3>Resources</h3>
              <p>
                In-depth resources covering the latest in tech, economics, and
                career development.
              </p>
            </div>
            <div className="column">
              <h3>Podcasts</h3>
              <p>
                Listen to expert discussions on the most pressing topics in
                innovation and growth.
              </p>
            </div>
            <div className="column">
              <h3>Events & Collaborations</h3>
              <p>
                Join webinars, workshops, and collaborations for networking and
                learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="row only-this-component">
            <div className="column left">
              <img src={businessboard} alt="Our Story" />
            </div>
            <div className="column right">
              <p>
                Inspired by unread tech and econ books collecting dust in
                libraries and the wealth of untapped information, we set out to
                bring these insights to the real world where they can be used.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
