import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Article: React.FC = () => {
  const { created_at_date, slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  // let articleFound = false;
  const fetchAddress = `https://orbitviewmedia.pythonanywhere.com/content/articles/${created_at_date}/${slug}/`

  // console.log(fetchAddress);

  useEffect(() => {
    fetch(
      fetchAddress,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  if (!article) {
    // articleFound = false;
    return (
      <>
        <NavBar />
        <div className="container">
          <h2 className="mt-2 poppins">Loading...</h2>
          <div
            style={{
              height: "90vh",
            }}
          ></div>
        </div>
        <Footer />
      </>
    );
  }

 {/* if (!articleFound) {
    return (
      <>
        <NavBar />
        <div className="container">
          <h2 className="mt-2 poppins">Content not found</h2>
          <div
            style={{
              height: "90vh",
            }}
          ></div>
        </div>
        <Footer />
      </>
    );
  }*/}

  let title = article.title;
  let subtitle = article.subtitle;
  let authors = article.authors;
  let content = article.content;
  // let createdAtDate = article.created_at_date;

  let pageName = `${title}`;

  document.title = `${pageName} - OrbitView Media`;
  console.log(created_at_date)

  return (
    <>
      <NavBar />
      <div className="article-container container mt-4">
        {/* Title Section */}
        <header className="article-header">
          <h1 className="article-title" style={{ color: "black" }}>{title}</h1>
          <p className="article-subtitle" style={{ color: "black" }}>{subtitle}</p>
          <p className="mt-4" style={{ color: "black" }}>
            By{" "}
            {authors
              .map((author: any) => `${author.first_name} ${author.last_name}`)
              .join(", ")}
          </p>
          <p className="article-date">Published on {created_at_date}</p>
        </header>

        {/* Content Section */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
