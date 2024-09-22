import React from "react";
import "./Blog.css"; // Custom CSS for styling

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title:
      "The AI Revolution: How Artificial Intelligence is Shaping Our Future",
    date: "August 25, 2024",
    author: "John Doe",
    summary:
      "Explore the latest trends in AI and how they are impacting industries across the globe.",
    imageUrl: "https://via.placeholder.com/400x200", // Example image
  },
  {
    id: 2,
    title: "Web3 and the Future of Finance: What You Need to Know",
    date: "September 10, 2024",
    author: "Jane Smith",
    summary:
      "Dive into the world of Web3 and discover its potential to reshape the financial industry.",
    imageUrl: "https://via.placeholder.com/400x200", // Example image
  },
  {
    id: 3,
    title: "Venture Capital for Young Entrepreneurs: A Guide to Funding",
    date: "October 1, 2024",
    author: "Tom Williams",
    summary:
      "Learn the ins and outs of venture capital and how young entrepreneurs can secure funding.",
    imageUrl: "https://via.placeholder.com/400x200", // Example image
  },
];

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">OrbitView Media Blog</h1>
      <p className="blog-intro">
        Explore the latest insights and trends in technology, economics, career
        growth, and more.
      </p>

      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-card">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="blog-post-image"
            />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-meta">
                By {post.author} | {post.date}
              </p>
              <p className="blog-post-summary">{post.summary}</p>
              <a href={`/blog/${post.id}`} className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
