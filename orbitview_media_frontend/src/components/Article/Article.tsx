import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Article: React.FC = () => {
  const { created_at_date, slug } = useParams();
  const [article, setArticle] = useState<any>(null);

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0OTA2MDQyLCJpYXQiOjE3MjQ4OTg4NDIsImp0aSI6ImQ5YTI5Mjc4OWQ2ZTRmMWE4YjA3NjFlNWEyMmM2N2VjIiwidXNlcl9pZCI6MX0.cpslCepVh1a9rJxHwARvxbU32aQfoJ8wpIeRS-1jujI"
  // in the future, you would load this from the HTTP-only cookie but here we hard coded it

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
  console.log(content)

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
