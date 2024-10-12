import { useState, useEffect, Fragment } from "react";
import Spinner from "../Spinner/Spinner";
import "./RecomendedArticles.css";

interface Author {
  first_name: string;
  last_name: string;
  profile_picture_url: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  authors: Author[];
  content: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  featured_image: string;
  label: string;
}

const RecommendedArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  function extractDate(timestamp: String) {
    return timestamp.split("T")[0];
  }

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch articles from the API
    fetch("https://orbitviewmedia.pythonanywhere.com/content/articles/all/")
    // change this to a specific endpoint where only blogs are present (use ORM query)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
        // setError(error.message);
        // setLoading(false);
      });
  }, []);

  function truncateDate(dateString: string) {
    return dateString.slice(0, 10);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="blog-posts-container poppins">
            <div style={{ height: "50px" }}></div>
            {articles.map((post) => (
              <div key={post.id} className="blog-post-card">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="blog-post-image"
                />
                <div className="blog-post-content">
                  <h2 className="blog-post-title">
                    <a
                      href={`/blog/${truncateDate(post.created_at)}/${
                        post.slug
                      }`}
                      style={{ textDecoration: "none" }}
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p className="blog-post-meta">
                    <p className="mt-4" style={{ color: "black" }}>
                      {post.authors.map((author: any) => (
                        <>
                          <img
                            src={author.profile_picture_url}
                            style={{ borderRadius: "50%" }}
                            alt=""
                            height="25"
                          />
                          &nbsp;&nbsp;
                          <span
                            style={{
                              fontSize: "1.2rem",
                              marginBottom: "1.5rem",
                            }}
                          >
                            {author.first_name} {author.last_name}
                          </span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                      ))}{" "}
                    </p>{" "}
                  </p>
                  <p>{formatDate(extractDate(post.created_at))}</p>
                  <p className="blog-post-summary">{post.subtitle}</p>
                  <a
                    href={`/blog/${extractDate(post.created_at)}/${post.slug}`}
                    className="read-more-btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </>
  );
};

export default RecommendedArticles;
