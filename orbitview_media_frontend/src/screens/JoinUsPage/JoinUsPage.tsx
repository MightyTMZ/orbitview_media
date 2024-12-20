import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fonts/Poppins.css";
import "./JoinUsPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";
import OrbitButton from "../../components/OrbitButton/OrbitButton";
import { Helmet } from "react-helmet";

const JoinUsPage: React.FC = () => {
  let pageName = "Join us";

  document.title = `${pageName} - OrbitView`;

  // const DiscordLink = "https://discord.gg/3DcBFDxW";
  // const LinkedInLink = "https://www.linkedin.com/company/orbitview-media/";

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const backendServerAddress = "https://orbitviewmedia.pythonanywhere.com";

  // https://orbitviewmedia.pythonanywhere.com/users/waitlist/

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`${backendServerAddress}/users/waitlist/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
      }),
    });

    setSubmitted(true);
  };

  const [loading, setLoading] = useState(true);

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
        <title>{`${pageName} - OrbitView`}</title>
        <meta
          name="description"
          content="Join our waiting list to stay updated with OrbitView's latest content, events, and news."
        />
        <meta
          name="keywords"
          content="Join us, waiting list, OrbitView, updates, events, news"
        />
      </Helmet>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <NavBar />
          <div className="container join-us-container my-5 poppins">
            <div className="text-center">
              {/*h1 className="display-4 mb-4">
                Join our communities for <strong>FREE</strong>
              </h1>
              <p className="community-link">
                <FaDiscord />{" "}
                <a href={DiscordLink} style={{ textDecoration: "none" }}>
                  OrbitView (Discord)
                </a>
              </p>
              <p className="community-link">
                <FaLinkedin />{" "}
                <a href={LinkedInLink} style={{ textDecoration: "none" }}>
                  OrbitView Media (LinkedIn)
                </a>
              </p>*/}

              <h1 className="display-4 mb-4 mt-5">Join our waiting list</h1>
              <p className="lead">
                Stay updated with our latest content, events, and news by
                signing up below.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="shadow-sm p-4 bg-white rounded"
                  >
                    <div className="mb-3">
                      <label htmlFor="first-name" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="last-name" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3"
                    >
                      Join mailing list
                    </button>
                  </form>
                ) : (
                  <div className="thank-you-message text-center p-4">
                    <h3>Thank you for signing up!</h3>
                    <p>You’ll be notified during our next release!</p>
                    <OrbitButton
                      text="Explore Further"
                      hoverText="Explore Further"
                      endpoint="/"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default JoinUsPage;
