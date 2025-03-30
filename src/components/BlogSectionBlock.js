import React from "react";

const BlogSectionBlock = ({ blogSection, primaryColor }) => {
  if (!blogSection) return null;

  const { blog_posts, title, description, background_color_override } =
    blogSection;

  return (
    <section
      className="py-5"
      style={{ backgroundColor: background_color_override }}
    >
      <div className="container">
        <h2 className="mb-4">{title}</h2>
        <p className="mb-5">{description}</p>
        <div className="row">
          {blog_posts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card">
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.subtitle}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="btn"
                    style={{
                      backgroundColor: primaryColor,
                      color: "#fff",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionBlock;
