import * as React from "react";

import { useState } from "react";
import BlogPreview from "./BlogPreview";
import Tile from "../../shared/Tile";
import ProgressBar from "react-bootstrap/ProgressBar";
import Header from "../../shared/Header/Header";
import consumerSpending from "../../../assets/consumerSpending.png";
import washuLogo from '../../../assets/washuLogo.png';
import "./Home.scss";
import EducationItem from "./education/EducationItem";
import education from "../../../data/education.json";
import * as noble from 'noble';

const Blogs = [
  {
    title: "Health vs Wealth",
    author: "Joe Frazier",
    blurb: "",
    content:
      "This week in The Pandemic: Science and Society, we covered some interesting information about the trade-offs between health and wealth. In other terms, we learned about the different approaches countries have taken to minimize infection while maintaining an economy. One of main take aways that I found particularly interesting was that, with or without an economic lockdown, people curtail economic activity for fear of infection. For example, in Denmark where there was a lockdown, consumer spending decreased by 29%. During this same period, consumer spending in lockdown-free Sweden fell a similar amount of 25%. There have been multiple times since the beginning of the pandemic that I heard someone say something about how lockdowns aren't worth the amount of harm they cause to the economy. However, we just saw that there will be a similar amount of harm done to the economy regardless of there being a lockdown in place. While general essential/nonessential lockdowns aren't the answer to eradicating the virus, lockdowns are important and play an important part in minimizing the long-term effect on the economy.",
    image: consumerSpending,
    posted: 1599274174,
    lastUpdate: 1599274174,
    published: 'Sept 4, 2020'
  },
  {
    title: "COVID-19 Consequences for Higher Education",
    author: "Joe Frazier",
    blurb: "",
    content: "This week in The Pandemic: Sciecne and Society, we were tasked with reading an article called \"COVID-19: consequences for higher education\". In which, the author writes about many of the ways Higher Education is losing income. These include: a decrease in auxiliary revenues (i.e. housing, summer camp and bookstore revenue), increased expenses due to more online teaching, the defering of students entering colleges, and a decrease in international enrolments. In addition to these, many students view their education as not just attending classes and getting grades, but also the experience of being in a new location where they can meet and interact with other like-minded students. Without these extra incentives many students will view their education as being worth less and will not be willing to pay extra to name of the university on their diploma. This will result in universities making cuts to research, PhD funding and many of their short-term contracts. Many prestigous universities have the funding to be able to make it through the pandemic until a vaccine is created but others will not be as fortunate. This could significantly change the education sector for years to come.",
    image: washuLogo,
    posted: 1599527595420,
    lastUpdate: 1599527595420,
    published: 'Sept 7, 2020'
  }
];

const Home = () => {
  // noble.on('stateChange', function(state) {
  //   if (state === 'poweredOn') {
  //     noble.startScanning();
  //   } else {
  //     noble.stopScanning();
  //   }
  // });

  // const connectBLE = () => {

  //   noble.startScanning([], true,);
  //   let navObj: any = window.navigator;
  //   if (navObj && navObj.bluetooth) {
  //     navObj.bluetooth
  //       .requestDevice({
  //         acceptAllDevices: true,
  //         optionalServices: ['battery_service']
  //       })
  //       .then((device: any) => {
  //         console.log(device);

  //         // Attempts to connect to remote GATT Server.
  //         return device.gatt.connect();
  //       }).then((server: any) => {
  //         // Getting Battery Service...
  //         console.log(server.getPrimaryService());
  //       }).then((service: any) => {
  //         service.getCharacteristic();
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //       });
  //   }
  // };
  return (
    <div className="text-light m-auto bg-light">
      <Header />
      <Tile>
        {education.map((uni: any) => (
          <EducationItem key={uni.school} item={uni} />
        ))}
      </Tile>
      <Tile>
        <BlogPreview blogs={Blogs} />
      </Tile>
    </div>
  );
};
export default Home;

//Projects section with spinners indicating status Complete, inprogress not started
