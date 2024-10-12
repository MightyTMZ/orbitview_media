import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import RecommendedArticles from "../../../components/RecommendedArticles/RecommendedArticles";

import { useState, useEffect, Fragment } from "react";
import Spinner from "../../../components/Spinner/Spinner";

const Blog: React.FC = () => {
  document.title = "Blog - OrbitView";

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
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <NavBar />
          <div className="blog-page">
            <h1 className="blog-title poppins">OUR THOUGHTS AND UPDATES </h1>
            <p className="blog-intro"></p>
            <div className="blog-posts-container">
              <RecommendedArticles />
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
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </div>
          </div>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default Blog;
