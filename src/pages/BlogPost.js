import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ siteConfig }) => {
  const { slug } = useParams();
  const [htmlContent, setHtmlContent] = useState(null);

  const post = siteConfig.blog_section_block.blog_posts.find(
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
      <img src={post.image} alt={post.title} className="img-fluid mb-3" />
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ zIndex: 0, color: siteConfig.color_scheme.text_color }}
      />
    </div>
  );
};

export default BlogPost;
