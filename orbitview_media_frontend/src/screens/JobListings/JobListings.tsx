import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JobListings.css";
import Spinner from "../../components/Spinner/Spinner";
import Links from "../../Links";
import AppPage from "../../components/AppPage/AppPage";

interface Job {
  id: number;
  title: string;
  location: string;
  employment_type: string;
  slug: string;
  experience_level: string;
  posted_on: string;
  tags: { title: string }[]; // Array of tags associated with the job
}

const JobListingsFeed: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch job listings from the API
    fetch(`${Links.backendServerAddress}/careers/jobs/`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
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

  return (
    <AppPage title="Available Jobs and Opportunities" pageTitle="Careers">
      <div className="job-listings container poppins">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>
              {convertEmploymentType(job.employment_type)} -{" "}
              {convertEmploymentLevel(job.experience_level)}
            </p>
            <p>Posted on: {new Date(job.posted_on).toLocaleDateString()}</p>
            {/*<div className="tags">
              {job.tags.map((tag, index) => (
                <span key={index} className="job-tag mb-1">
                  {tag.title}
                  {/* have an option for the user to 
                      view all the tags within this job
                      we can unlimited tags, but it will
                      cause info clutter/overload
                  
                  
                </span>
              ))}
            </div>*/}
            <Link to={`/careers/${job.slug}`} className="view-detail">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </AppPage>
  );
};

export default JobListingsFeed;
