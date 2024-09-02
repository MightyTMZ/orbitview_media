import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fonts/Poppins.css";
import "./JoinUsPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const JoinUsPage: React.FC = () => {

  let pageName = "Join us";

  document.title = `${pageName} - OrbitView Media`

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


  return (
    <>
      <NavBar />
      <div className="container join-us-container my-5 poppins">
        <div className="text-center">
          <h1 className="display-4 mb-4">Join Us</h1>
          <p className="lead">
            Stay updated with our latest content, events, and news by signing up
            below.
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
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Join waitlist
                </button>
              </form>
            ) : (
              <div className="thank-you-message text-center p-4">
                <h3>Thank you for signing up!</h3>
                <p>
                  You’ll be notified when our amazing new content is released.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinUsPage;
