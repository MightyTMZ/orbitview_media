import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import RecommendedArticles from "../../components/RecommendedArticles/RecommendedArticles";

const Blog: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="blog-page">
        <h1 className="blog-title">Our thoughts and updates </h1>
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
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
