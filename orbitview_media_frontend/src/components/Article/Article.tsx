import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Article: React.FC = () => {
  const { created_at_date, slug } = useParams();
  const [article, setArticle] = useState<any>(null);

  const accessToken = localStorage.getItem("accessToken")

  const headers = {
    'Authorization': `JWT ${accessToken}`,
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/content/articles/${created_at_date}/${slug}/`, {
      method: 'GET',      // Method can be 'GET', 'POST', etc.
      headers: headers    // Pass the headers object here
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  if (!article) {
    return <p>Loading...</p>;
  }

  let title = article.title;
  let subtitle = article.subtitle;
  let authors = article.authors;
  let content = article.content;
  let createdAt = article.created_at_date;

  let pageName = `${title}`;

  document.title = `${pageName} - OrbitView Media`

  return (
    <>
    <NavBar/>
    <div className="article-container container">
      {/* Title Section */}
      <header className="article-header">
        <h1 className="article-title">{title}</h1>
        <p className="article-subtitle">{subtitle}</p>
        <p className="mt-4">
          By{" "}
          {authors
            .map((author: any) => `${author.first_name} ${author.last_name}`)
            .join(", ")}
        </p>
        <p className="article-date">Published on {createdAt}</p>
      </header>

      {/* Content Section */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
    <Footer/>
    </>
  );
};

export default Article;
