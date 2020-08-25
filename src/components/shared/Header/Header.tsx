import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import EmailModal from "../EmailModal";
import HeaderIcons from "./HeaderIcons";

import "./Header.scss";

const Header: React.StatelessComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [sticky, setSticky] = useState(false);
  const headerRef: any = useRef(null);
  const titleRef: any = useRef(null);
  let stickyPoint: number;

  const handleScroll = () => {
    console.log(window.scrollY);
    if (
      headerRef &&
      headerRef.current &&
      headerRef.current.getBoundingClientRect()
    ) {
      // Then, we compare the distance of the ref component to the top
      // with top value we set. If less than, we set isStick ture.
      setSticky(window.scrollY > stickyPoint);
    }
  };

  useEffect(() => {
    stickyPoint =
      titleRef.current.getBoundingClientRect().top +
      titleRef.current.getBoundingClientRect().height;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`text-center align-center justify-content-center`}>
      <Jumbotron fluid className="bg-dark text-primary mb-0 pb-0">
        <h1 ref={titleRef}>Joe Frazier</h1>
        {sticky && <h1 className="text-dark">margin correction</h1>}
        <div ref={headerRef} className={`${sticky ? "sticky" : "non-sticky"}`}>
          <HeaderIcons setShowModal={setShowModal} />
        </div>
      </Jumbotron>
      <EmailModal
        show={showModal}
        toggleShow={() => setShowModal(!showModal)}
      ></EmailModal>
    </div>
  );
};

export default Header;
