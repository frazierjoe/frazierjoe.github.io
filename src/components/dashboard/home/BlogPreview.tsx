import * as React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BlogCard from "../blog/BlogCard";

interface Props {
  blogs: any[];
}

const BlogPreview = ({ blogs }: Props) => {
  return (
    <Container className="bg-white d-flex flex-column py-5 rounded-lg">
      <h1 className="text-center pb-5">Blog</h1>

      <Row className="px-5 my-2">
        {blogs.map((blog) => (
          <Col xs={12} md={6} xl={4} className="px-2 py-3">
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPreview;
