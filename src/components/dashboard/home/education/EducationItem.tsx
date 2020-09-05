import * as React from "react";
import { useState } from "react";
import {FaGraduationCap, FaAppleAlt } from 'react-icons/fa';
import {GiTiedScroll} from 'react-icons/gi'
import {SiGoogleclassroom} from 'react-icons/si';

import './EducationItem.scss';

interface Props {
  item: any;
}

const EducationItem = ({ item }: Props) => {
  const [course1List, setCourse1List] = useState("");
  const toggleCouseList = () => {
    setCourse1List(course1List === "show" ? "hide" : "show");
  };
  const gradItem = 'p-3 h5 d-flex grad-item vertical-align-middle';
  return (
    <div className="px-3">
      <h3 className="px-3">{item.school}</h3>

      <div className="px-3">
        <div className={gradItem}><GiTiedScroll className="vertical-align-middle" /> <h5 className="vertical-align-middle" >{item.degree}</h5></div>
        <div className={gradItem}><FaGraduationCap /> Graduation {item.start} </div>
        <div className={gradItem}><FaAppleAlt/> GPA {item.gpa}</div>
        <div
          onClick={() => toggleCouseList()}
          className="text-blue cursor-pointer grad-item"
        ><SiGoogleclassroom/> Courses
        </div>
        <ul className={`accordion ${course1List}`}>
          {item.courses?.map((course: string) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default EducationItem;
