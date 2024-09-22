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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
