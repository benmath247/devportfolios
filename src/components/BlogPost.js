// src/components/BlogPost.jsx

import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ siteConfig }) => {
  const { slug } = useParams();

  if (!siteConfig) return null;

  const post = siteConfig.blog_section_block.blog_posts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    return <p className="text-center mt-5">Blog post not found.</p>;
  }

  return (
    <div className="container py-5">
      <h1 style={{ color: siteConfig.color_scheme.primary_color }}>
        {post.title}
      </h1>
      <p>{post.subtitle}</p>
      <img src={post.image} alt={post.title} className="img-fluid mb-3" />
      <iframe
        src={post.html_file}
        title={post.title}
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default BlogPost;
