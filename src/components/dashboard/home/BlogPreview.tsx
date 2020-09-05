import * as React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import BlogCard from "../blog/BlogCard";

interface Props {
  blogs: any[];
}

const BlogPreview = ({ blogs }: Props) => {
  return (
    <>
      <h2 className="text-center pb-4">Recent Posts</h2>
      <Row className="px-5 my-2 justify-content-center">
        {blogs.map((blog) => (
          // <Col xs={12} md={6} xl={4} className="px-2 py-3">
            <BlogCard blog={blog} />
          // {/* </Col> */}
        ))}
      </Row>
    </>
  );
};

export default BlogPreview;
