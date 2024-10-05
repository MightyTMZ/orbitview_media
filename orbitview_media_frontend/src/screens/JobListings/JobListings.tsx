import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./JobListings.css";

import { useState, useEffect, Fragment } from "react";
import Spinner from "../../components/Spinner/Spinner";

const jobs = [
  {
    id: 1,
    title: "Social Media Manager",
    location: "Remote",
    description: `We are looking for someone who specializes in managing social media pages to drive more traffic and traction for our social media presence across multiple platforms, including Instagram and LinkedIn.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 2,
    title: "Lead Software Engineer",
    location: "Remote",
    description: `We are seeking a Lead Software Engineer with expertise in AR/VR technologies, AI systems, and full-stack development to oversee the design, architecture, and scaling of OrbitView's immersive 3D networking platform. You will lead a team of engineers to bring our vision of futuristic, autonomous networking to life.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    description: `We are looking for a creative UI/UX Designer to design intuitive and immersive experiences for our 3D networking platform. The ideal candidate will have experience in AR/VR, 3D design interfaces, and user-centered design to ensure seamless interaction with our platform.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 4,
    title: "AI Engineer",
    location: "Remote",
    description: `We are seeking an AI Engineer to develop cutting-edge AI solutions for autonomous networking, personal AI connectors, and intelligent interaction within OrbitView. The ideal candidate will have experience with machine learning, NLP, and AI-driven systems for building personalized, scalable experiences.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 5,
    title: "Cloud Infrastructure Architect",
    location: "Remote",
    description: `We are hiring a Cloud Infrastructure Architect to build and maintain a robust cloud infrastructure capable of scaling OrbitView’s global 3D platform. You will work on creating a secure, efficient, and scalable system to power immersive AR/VR experiences and real-time networking.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 6,
    title: "Data Scientist",
    location: "Remote",
    description: `We are looking for a Data Scientist to analyze data from our platform, offering insights into user engagement, behavior, and platform optimization. The ideal candidate will be experienced in large-scale data analysis, predictive modeling, and data-driven decision-making to improve user experiences and grow our platform.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 7,
    title: "Marketing Director",
    location: "Remote",
    description: `We are seeking a Marketing Director with experience in tech platforms to lead our global marketing efforts. This role involves developing strategies to increase brand awareness, user acquisition, and engagement on OrbitView’s innovative 3D platform through a mix of digital, social media, and traditional marketing channels.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 8,
    title: "Product Manager",
    location: "Remote",
    description: `We are looking for a Product Manager to drive the development of OrbitView’s immersive features, from concept to execution. You will work closely with cross-functional teams to prioritize initiatives, define product roadmaps, and ensure the alignment of our platform’s features with our broader vision of autonomous and immersive networking.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 9,
    title: "DevOps Engineer",
    location: "Remote",
    description: `We are hiring a DevOps Engineer to manage the continuous integration and delivery pipeline for OrbitView's platform. You will ensure seamless deployments, system reliability, and automation across our immersive AR/VR and AI-powered platform.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 10,
    title: "Business Development Manager",
    location: "Remote",
    description: `We are seeking a Business Development Manager to identify new business opportunities and partnerships to help expand OrbitView’s reach. The ideal candidate will have experience in tech or social media platforms, with a focus on driving growth, building partnerships, and exploring new markets.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },
  {
    id: 11,
    title: "Mobile App Developer",
    location: "Remote",
    description: `We are looking for a Mobile App Developer to build and maintain OrbitView’s mobile applications on iOS and Android. The ideal candidate will have experience with cross-platform mobile development frameworks, integrating AR/VR features, and optimizing user experience for mobile networking applications.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 12,
    title: "Content Strategist",
    location: "Remote",
    description: `We are seeking a Content Strategist to craft and manage content for OrbitView’s platform, including blog posts, podcasts, social media, and interactive content hubs. The ideal candidate will be skilled in creating engaging, educational content that resonates with our target audience of professionals and entrepreneurs.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 13,
    title: "Virtual Reality Engineer",
    location: "Remote",
    description: `We are hiring a Virtual Reality Engineer to develop immersive experiences for OrbitView’s 3D networking environment. This role requires expertise in VR development, interactive 3D design, and the ability to create seamless virtual networking spaces.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 14,
    title: "Community Manager",
    location: "Remote",
    description: `We are looking for a Community Manager to foster engagement within OrbitView’s growing user base. You will be responsible for managing online communities, hosting virtual events, and facilitating discussions that bring value to users while ensuring a positive and active network.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 15,
    title: "AR Developer",
    location: "Remote",
    description: `We are seeking an Augmented Reality (AR) Developer to create immersive AR experiences that enhance networking within OrbitView’s platform. The ideal candidate will be experienced in AR app development, spatial computing, and building intuitive AR user interfaces.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 16,
    title: "Customer Success Manager",
    location: "Remote",
    description: `We are hiring a Customer Success Manager to ensure that our users have a seamless and rewarding experience on the OrbitView platform. You will engage with users, resolve issues, and help drive retention by providing exceptional service and support.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 17,
    title: "Growth Hacker",
    location: "Remote",
    description: `We are looking for a Growth Hacker to drive rapid user acquisition and engagement. You will design and execute growth experiments, leveraging analytics, user behavior data, and creative marketing strategies to expand OrbitView’s user base.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 18,
    title: "Data Engineer",
    location: "Remote",
    description: `We are seeking a Data Engineer to build and maintain the infrastructure needed for data collection, processing, and analysis on the OrbitView platform. You will work closely with the AI team to ensure that our autonomous networking solutions are powered by accurate and comprehensive data pipelines.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 19,
    title: "Legal Counsel",
    location: "Remote",
    description: `We are hiring a Legal Counsel to provide legal guidance on matters such as platform compliance, data privacy regulations, intellectual property, and commercial partnerships. Experience in tech and social media platform law is preferred.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 20,
    title: "Partnerships Manager",
    location: "Remote",
    description: `We are looking for a Partnerships Manager to build strategic alliances with organizations, influencers, and brands that align with OrbitView’s mission. You will identify partnership opportunities, negotiate terms, and manage relationships to help expand our ecosystem.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 21,
    title: "Cybersecurity Specialist",
    location: "Remote",
    description: `We are seeking a Cybersecurity Specialist to ensure the security of OrbitView’s platform and protect user data. You will develop and implement security protocols, manage risk assessments, and monitor for threats in both the virtual and augmented reality environments.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 22,
    title: "SEO Specialist",
    location: "Remote",
    description: `We are looking for an SEO Specialist to optimize OrbitView’s online presence and content discoverability. You will implement SEO best practices across our website and social media, driving organic traffic and increasing our visibility in search engines.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 23,
    title: "Financial Analyst",
    location: "Remote",
    description: `We are hiring a Financial Analyst to support OrbitView’s financial planning, budgeting, and forecasting processes. You will analyze data, create financial models, and provide insights to help guide strategic decision-making.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },

  {
    id: 24,
    title: "Video Producer",
    location: "Remote",
    description: `We are seeking a Video Producer to create high-quality video content for OrbitView’s platform and social media channels. You will work on tutorials, promotional videos, and immersive VR/AR video experiences to showcase our innovative solutions.`,
    applyLink: "mailto:admin@orbitviewmedia.com",
  },
];

document.title = "Careers - OrbitView";

const JobListings: React.FC = () => {

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
      {loading ? <Spinner/> : <Fragment>
        <NavBar />
        <div className="job-listings-screen poppins">
          <h1 className="job-listings-title">Available roles</h1>
          <p className="job-listings-intro">
            Explore our current job and role openings and be part of OrbitView.
            <br />
            Pay and compensation will be based piece-rated and effort based.
            Interested in applying? Email{" "}
            <a
              href="mailto:admin@orbitviewmedia.com"
              style={{ textDecoration: "none" }}
            >
              admin@orbitviewmedia.com
            </a>
          </p>
          <div className="job-listings-container">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h2 className="job-title">{job.title}</h2>
                <p className="job-location">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="job-description">{job.description}</p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-btn"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Fragment>}
    </>
  );
};

export default JobListings;
