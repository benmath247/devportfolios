import { Container, Row } from "react-bootstrap";
import { useSiteConfigContext } from "../contexts/siteConfigContext";
import BlogPost from "../components/blog/BlogPost";

const BlogList = () => {
  const siteConfig = useSiteConfigContext();
  if (!siteConfig) {
    return <p className="text-center mt-5">Loading site configuration...</p>;
  }

  const posts = siteConfig.blog_section_block.blog_posts;

  if (!posts || posts.length === 0) {
    return <p className="text-center mt-5">No blog posts to display.</p>;
  }
  console.log(posts);
  return (
    <Container className="py-5">
      <h1
        className="mb-4"
        style={{ color: siteConfig.color_scheme.text_color }}
      >
        Blog Articles
      </h1>
      <Row>
        {posts.map((post) => (
          <BlogPost post={post} key={post.id} />
        ))}
      </Row>
    </Container>
  );
};

export default BlogList;
