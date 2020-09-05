import * as React from "react";

import {useState } from 'react';
import BlogPreview from "./BlogPreview";
import Tile from "../../shared/Tile";
import ProgressBar from "react-bootstrap/ProgressBar";
import Header from "../../shared/Header/Header";
import consumerSpending from "../../../assets/consumerSpending.png";
import "./Home.scss";
import EducationItem from "./education/EducationItem";
import education from '../../../data/education.json';

const Blogs = [
  {
    title: "Health vs Wealth",
    author: "Joe Frazier",
    blurb: "",
    content:
      "This week in The Pandemic: Science and Society, we covered some interesting information about the trade-offs between health and wealth. In other terms, we learned about the different approaches countries have taken to minimize infection while maintaining an economy. One of main take aways that I found particularly interesting was that, with or without an economic lockdown, people curtail economic activity for fear of infection. For example, in Denmark where there was a lockdown, consumer spending decreased by 29%. During this same period, consumer spending in lockdown-free Sweden fell a similar amount of 25%. There have been multiple times since the beginning of the pandemic that I heard someone say something about how lockdowns aren't worth the amount of harm they cause to the economy. However, we just saw that there will be a similar amount of harm done to the economy regardless of there being a lockdown in place. While general essential/nonessential lockdowns aren't the answer to eradicating the virus, lockdowns are important and play an important part in minimizing the long-term effect on the economy.",
    image: consumerSpending,
    posted:1599274174,
    lastUpdate: 1599274174,
  },
];

const Home = () => {
  return (
    <div className="text-light m-auto bg-light">
      <Header />
      <Tile>
      {education.map((uni: any) => 
        <EducationItem key={uni.school} item={uni} />
      )}
      </Tile>
      <Tile>
        <BlogPreview blogs={Blogs} />
      </Tile>
    </div>
  );
};
export default Home;

//Projects section with spinners indicating status Complete, inprogress not started
