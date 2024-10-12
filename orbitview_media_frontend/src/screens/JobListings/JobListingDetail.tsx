import React, { useRef, useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./JobListingDetail.css";
import Spinner from "../../components/Spinner/Spinner";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Links from "../../Links";

interface Job {
  id: number;
  title: string;
  description: string;
  responsibilities: string;
  qualifications: string;
  benefits: string;
  employment_type: string;
  salary_description: string;
  location: string;
  experience_level: string;
  posted_on: string;
  application_deadline: string | null;
  tags: { title: string }[];
}

const ApplicationFailure: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className="application-status failure poppins"
        style={{
          backgroundColor: "#f8d7da",
          color: "#721c24",
          padding: "20px",
          border: "1px solid #f5c6cb",
          borderRadius: "4px",
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "600px",
        }}
      >
        <h2>⚠️ Application Failed</h2>
        <p>
          Oops! Something went wrong while submitting your application. Please
          try again later, or check your internet connection. Have a question or
          follow up? Send us an email at{" "}
          <a href="mailto:admin@orbitviewmedia.com">
            <strong>admin@orbitviewmedia.com</strong>
          </a>
        </p>
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "15px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
          onClick={() => window.history.back()}
        >
          Retry Application
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

const ApplicationSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <NavBar />
      <div
        className="application-status success poppins"
        style={{
          backgroundColor: "#d4edda",
          color: "#155724",
          padding: "20px",
          border: "1px solid #c3e6cb",
          borderRadius: "4px",
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "600px",
        }}
      >
        <h2>🎉 Application Submitted and Received!</h2>
        <p>
          Thank you for applying! Your application has been received
          successfully. We will get back to you shortly.
          <br />
          <br />
          Questions or follow ups should be sent to our email{" "}
          <a href="mailto:admin@orbitviewmedia.com">
            <strong>admin@orbitviewmedia.com</strong>
          </a>
        </p>
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "15px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
          onClick={() => navigate(Links.resourceCenter[0].endpoint)}
        >
          Apply for More Jobs
        </button>
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "15px",
            marginLeft: "10px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
          onClick={() => navigate("/")}
        >
          Go to Home Page
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

const JobDetail: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  // Function to handle scrolling to the form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkedinProfileUrl: "",
    additionalInfo: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [submittedApplication, setSubmittedApplication] = useState(false);
  const [successScreen, showSuccessScreen] = useState(false);
  const [failureScreen, showFailureScreen] = useState(false);

  if (submittedApplication) {
    // GHOST REFERENCE
  }

  // Use useEffect to set the saved form data once when the component mounts
  useEffect(() => {
    const savedFirstName = localStorage.getItem("firstName");
    const savedLastName = localStorage.getItem("lastName");
    const savedEmail = localStorage.getItem("email");
    const savedLinkedInProfileUrl = localStorage.getItem("linkedinProfileUrl");
    const savedAdditionalInfo = localStorage.getItem("additionalInfo");

    if (
      savedFirstName ||
      savedLastName ||
      savedEmail ||
      savedLinkedInProfileUrl ||
      savedAdditionalInfo
    ) {
      setFormData({
        firstName: savedFirstName || "",
        lastName: savedLastName || "",
        email: savedEmail || "",
        linkedinProfileUrl: savedLinkedInProfileUrl || "",
        additionalInfo: savedAdditionalInfo || "",
      });
    }
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/careers/jobs/${slug}/`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [slug]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.linkedinProfileUrl
    ) {
      setFormError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please provide a valid email address.");
      return;
    }

    if (formData.additionalInfo.length > 5000) {
      setFormError(
        "Additional Information section cannot exceed 5000 characters"
      );
      return;
    }

    // Save form data in localStorage in case of failure
    localStorage.setItem("firstName", formData.firstName);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("linkedinProfileUrl", formData.linkedinProfileUrl);
    localStorage.setItem("additionalInfo", formData.additionalInfo);
    setLoading(true);
    setSubmittedApplication(true);

    // Submit the form data to the backend
    fetch(`http://127.0.0.1:8000/careers/jobs/${slug}/apply/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        linkedin_profile_url: formData.linkedinProfileUrl,
        additional_info: formData.additionalInfo,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setFormSuccess("Your application has been submitted successfully!");

          setTimeout(() => {
            setLoading(false);
          }, 5000);
          showSuccessScreen(true);

          // Clear form data after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            linkedinProfileUrl: "",
            additionalInfo: "",
          });
        } else {
          setFormError(
            "An error occurred while submitting your application. Please try again."
          );

          setTimeout(() => {
            setLoading(false);
          }, 5000);
          showFailureScreen(true);
        }
      })
      .catch((error: Error) => {
        setFormError(
          "An error occurred while submitting your application. Please try again."
        );
        console.log(error);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  if (failureScreen) {
    return <ApplicationFailure />;
  }

  if (successScreen) {
    return <ApplicationSuccess />;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  const convertEmploymentType = (type: string) => {
    if (type === "FT") return "Full Time";
    if (type === "PT") return "Part Time";
    if (type === "C") return "Contract";
  };

  const convertEmploymentLevel = (type: string) => {
    if (type === "Entry") return "Entry Level";
    if (type === "Mid") return "Mid-Level";
    if (type === "Senior") return "Senior-Level";
  };

  function formatDate(dateString: string) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const [year, month, day] = dateString.split("-");
    const suffix = (day: any) => {
      const dayNum = parseInt(day, 10);
      if (dayNum > 3 && dayNum < 21) return "th";
      switch (dayNum % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return `${months[parseInt(month, 10) - 1]} ${day}${suffix(day)}, ${year}`;
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <NavBar />
          <div className="job-detail poppins container mt-3">
            <h2>{job.title}</h2>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Type:</strong>{" "}
              {convertEmploymentType(job.employment_type)}
            </p>
            <p>
              <strong>Experience Level:</strong>{" "}
              {convertEmploymentLevel(job.experience_level)}
            </p>
            <p>
              <strong>Posted on:</strong>{" "}
              {formatDate(job.posted_on.split("T")[0])}
            </p>
            {job.application_deadline && (
              <p>
                <strong>Apply by:</strong>{" "}
                {formatDate(job.application_deadline.split("T")[0])}
              </p>
            )}
            <button
              style={{
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "15px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
              onClick={scrollToForm} // Scroll to form when button is clicked
              className="mb-2"
            >
              Apply
            </button>
            <hr />
            <section>
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
            </section>
            <section>
              <h3>Responsibilities</h3>
              <p dangerouslySetInnerHTML={{ __html: job.responsibilities }}></p>
            </section>
            <section>
              <h3>Qualifications</h3>
              <p dangerouslySetInnerHTML={{ __html: job.qualifications }}></p>
            </section>
            <section>
              <h3>Benefits</h3>
              <p dangerouslySetInnerHTML={{ __html: job.benefits }}></p>
            </section>

            <hr />
            <form
              className="application-form mt-4"
              id="orbitview-job-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <h3>Apply Now</h3>
              {formError && <p className="form-error">{formError}</p>}
              {formSuccess && <p className="form-success">{formSuccess}</p>}
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color:
                      formData.firstName.length > 240 ? "#d9534f" : "#555555", // Warning color if user is near the limit
                    marginTop: "5px",
                    padding: "5px 0",
                  }}
                >
                  {255 - formData.firstName.length} characters remaining
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  maxLength={255}
                  required
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color:
                      formData.lastName.length > 240 ? "#d9534f" : "#555555", // Warning color if user is near the limit
                    marginTop: "5px",
                    padding: "5px 0",
                  }}
                >
                  {255 - formData.lastName.length} characters remaining
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  maxLength={500}
                  required
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color: formData.email.length > 480 ? "#d9534f" : "#555555", // Warning color if user is near the limit
                    marginTop: "5px",
                    padding: "5px 0",
                  }}
                >
                  {500 - formData.email.length} characters remaining
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="linkedinProfileUrl">
                  LinkedIn Profile URL *
                </label>
                <input
                  type="url"
                  id="linkedinProfileUrl"
                  name="linkedinProfileUrl"
                  value={formData.linkedinProfileUrl}
                  onChange={handleInputChange}
                  maxLength={2000}
                  required
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color:
                      formData.linkedinProfileUrl.length > 1800
                        ? "#d9534f"
                        : "#555555", // Warning color if user is near the limit
                    marginTop: "5px",
                    padding: "5px 0",
                  }}
                >
                  {2000 - formData.linkedinProfileUrl.length} characters
                  remaining
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="additionalInfo">
                  Additional Information
                  <sub>
                    {"    "} Our systems unfortunately cannot accept uploaded
                    resumes, please use this section to elaborate further on
                    your experiences or skills if you wish
                  </sub>
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  maxLength={5000}
                ></textarea>
                <p
                  style={{
                    fontSize: "1rem",
                    color:
                      formData.additionalInfo.length > 4500
                        ? "#d9534f"
                        : "#555555", // Warning color if user is near the limit
                    marginTop: "5px",
                    padding: "5px 0",
                  }}
                >
                  {5000 - formData.additionalInfo.length} characters remaining
                </p>
              </div>
              <button type="submit" className="submit-button mb-3">
                Submit Application
              </button>
            </form>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default JobDetail;
