import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobListingDetail.css";
import Spinner from "../../components/Spinner/Spinner";
import NavBar from "../../components/NavBar/NavBar";

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

const JobDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch job details from the API using slug
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

  if (loading) {
    return <Spinner />;
  }

  if (!job) {
    return <p>Job not found.</p>; // you should make a 404 screen
  }

  const convertEmploymentType = (type: string) => {
    if (type == "FT") {
      return "Full Time";
    } else if (type == "PT") {
      return "Part Time";
    } else if (type == "C") {
      return "Contract";
    }
  };

  const convertEmploymentLevel = (type: string) => {
    if (type == "Entry") {
      return "Entry Level";
    } else if (type == "Mid") {
      return "Mid-Level";
    } else if (type == "Senior") {
      return "Senior-Level";
    }
  };

  function formatDate(dateString: string) {
    // Create an array of month names
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

    // Split the input date string into an array
    const [year, month, day] = dateString.split("-");

    // Determine the correct suffix for the day
    const suffix = (day: any) => {
      const dayNum = parseInt(day, 10);
      if (dayNum > 3 && dayNum < 21) return "th"; // Covers 11th to 13th
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

    // Construct the formatted date
    return `${months[parseInt(month, 10) - 1]} ${day}${suffix(day)}, ${year}`;
  }

  return (
    <>
      <NavBar />
      <div className="job-detail poppins container mt-3">
        <h2>{job.title}</h2>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Type:</strong> {convertEmploymentType(job.employment_type)}
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
        <section>
          <h3>Salary</h3>
          <p dangerouslySetInnerHTML={{ __html: job.salary_description }}></p>
        </section>
        <div className="tags">
          {job.tags.map((tag, index) => (
            <span key={index} className="job-tag">
              {tag.title}
            </span>
          ))}
        </div>
        <p>Ready to apply, form is below</p>
        {/* Have the form right here and send the response as POST to the endpoint:
        
          `/careers/jobs/${slug}/apply`
        
          */}
      </div>
    </>
  );
};

export default JobDetail;
