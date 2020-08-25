import * as React from "react";

import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

interface Props {
    setShowModal: Function;
}

const HeaderIcons = ({setShowModal}: Props) => {
  return (
    <h1 className="d-flex text-light justify-content-around">
      <a href="https://github.com/frazierjoe" className="px-3 transform-half-l" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/joe-frazier-b1564a13b"
        className="px-3 transform-half-u"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a className="px-3 transform-half-r" onClick={() => setShowModal(true)}>
        <FaRegEnvelope />
      </a>
    </h1>
  );
};
export default HeaderIcons;
