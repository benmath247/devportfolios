import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSiteConfigContext } from "../contexts/siteConfigContext";

const BlogPost = () => {
  const { siteConfig } = useSiteConfigContext();
  const { slug } = useParams();
  const [htmlContent, setHtmlContent] = useState(null);

  const post = siteConfig?.blog_section_block?.blog_posts.find(
    (p) => p.slug === slug
  );

  useEffect(() => {
    if (post?.html_file) {
      // Fetch the HTML file content
      fetch(post.html_file)
        .then((response) => response.text())
        .then((data) => setHtmlContent(data))
        .catch((error) => console.error("Error fetching blog content:", error));
    }
  }, [post]);

  if (!post) {
    return <p className="text-center mt-5">Blog post not found.</p>;
  }

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: siteConfig.color_scheme.background_color }}
    >
      <h1 style={{ color: siteConfig.color_scheme.text_color }}>
        {post.title}
      </h1>

      {post.subtitle && <p>{post.subtitle}</p>}
      <div className="text-center">
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-3"
          style={{ height: "500px" }}
        />
      </div>
      <iframe
        srcDoc={htmlContent}
        title={post.title}
        style={{
          width: "100%",
          height: "1000px",
          border: "none",
          color: siteConfig.color_scheme.text_color,
        }}
      ></iframe>
    </div>
  );
};

export default BlogPost;
