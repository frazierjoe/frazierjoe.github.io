import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BlogPreview from './BlogPreview';
import Col from "react-bootstrap/Col";
import BlogCard from "../blog/BlogCard";

import Header from '../../shared/Header/Header';
import background1 from "../../../assets/background1.gif";
import "./Home.scss";

const Blogs = [
  {
    title: "Test",
    author: "Joe Frazier",
    blurb: "This is a test post",
    content:
      "THis is dafsf asdg adsf g asd v asdjvbalsdbvas dasdblvkasjdb faksdjf kjbvasdlbaliurgasjdb",
    image: background1,
    posted: Date.now(),
    lastUpdate: Date.now(),
  },
  {
    title: "Test2",
    author: "Joe Frazier",
    blurb: "This is a test post",
    content:
      "THis is dafsf asdg adsf g asd v asdjvbalsdbvas dasdblvkasjdb faksdjf kjbvasdlbaliurgasjdb",
    image: background1,
    posted: Date.now(),
    lastUpdate: Date.now(),
  },
  {
    title: "Test3",
    author: "Joe Frazier",
    blurb: "This is a test post",
    content:
      "THis is dafsf asdg adsf g asd v asdjvbalsdbvas dasdblvkasjdb faksdjf kjbvasdlbaliurgasjdb",
    image: background1,
    posted: Date.now(),
    lastUpdate: Date.now(),
  },
];

const Home = () => {
  return (
    <div className="text-text m-auto bg-light">
      <Header />
      

      <Container fluid className="d-flex flex-column py-5">
        <BlogPreview blogs={Blogs}/>
      </Container>
    </div>
  );
};
export default Home;
