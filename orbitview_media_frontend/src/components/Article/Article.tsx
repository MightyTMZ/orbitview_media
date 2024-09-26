import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";
import RecommendedArticles from "../RecommendedArticles/RecommendedArticles";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import JoinUsWidget from "../JoinUsWidget/JoinUsWidget";

const Article: React.FC = () => {
  const { created_at_date, slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  // let articleFound = false;
  const fetchAddress = `https://orbitviewmedia.pythonanywhere.com/content/articles/${created_at_date}/${slug}/`;

  // console.log(fetchAddress);

  useEffect(() => {
    fetch(fetchAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  document.title = `${article.title} - OrbitView Media`;

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

  {
    /* if (!articleFound) {
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
  }*/
  }

  let title = article.title;
  let subtitle = article.subtitle;
  let authors = article.authors;
  let content = article.content;
  // let createdAtDate = article.created_at_date;

  let pageName = `${title}`;

  function formatDate(dateString: string) {
    const date = new Date(dateString); // Convert the string to a Date object

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  document.title = `${pageName} - OrbitView Media`;

  return (
    <>
      <NavBar />
      <div className="article-container container mt-4 poppins">
        {/* Title Section */}
        <header className="article-header">
          <h1 className="article-title" style={{ color: "black" }}>
            {title}
          </h1>
          <p className="article-subtitle" style={{ color: "black" }}>
            {subtitle}
          </p>
          <p className="mt-4" style={{ color: "black" }}>
            {authors.map((author: any) => (
              <>
                <img
                  src={author.profile_picture_url}
                  style={{ borderRadius: "50%" }}
                  alt=""
                  height="25"
                />
                &nbsp;&nbsp;
                <span style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                  {author.first_name} {author.last_name}
                </span>
                <br />
              </>
            ))}
          </p>
          {created_at_date ? (
            <p className="article-date">{formatDate(created_at_date)}</p>
          ) : (
            <p></p>
          )}
        </header>

        {/* Content Section */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div style={{ height: "100px" }}></div>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2370718278148364"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2370718278148364"
          data-ad-slot="6232326969"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <hr />
        <RecommendedArticles />
        <div style={{ height: "100px" }}></div>
        <hr />
        <JoinUsWidget />
        <div style={{ height: "100px" }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
