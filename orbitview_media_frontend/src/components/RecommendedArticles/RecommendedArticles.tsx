import { useState, useEffect } from "react";
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
}

const RecommendedArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  function extractDate(timestamp: String) {
    return timestamp.split("T")[0];
  }

  useEffect(() => {
    // Fetch articles from the API
    fetch("https://orbitviewmedia.pythonanywhere.com/content/articles/all/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
        // setError(error.message);
        // setLoading(false);
      });
  }, []);

  return (
    <>
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
              <h2 className="blog-post-title">{post.title}</h2>
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
                        style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}
                      >
                        {author.first_name} {author.last_name}
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </>
                  ))}{" "}
                </p>{" "}
              </p>
              <p className="blog-post-summary">{post.subtitle}</p>
              <a
                href={`/#blog/${extractDate(post.created_at)}/${post.slug}`}
                className="read-more-btn"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendedArticles;
