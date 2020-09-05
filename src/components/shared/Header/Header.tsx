import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import EmailModal from "../EmailModal";
import HeaderIcons from "./HeaderIcons";


import "./Header.scss";

const Header: React.StatelessComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');
  const [headerClass, setHeaderClass] = useState('');
  const [scroll, setScroll] = useState(0);
  const [sticky, setSticky] = useState(false);
  const headerRef: any = useRef(null);
  const titleRef: any = useRef(null);
  let stickyPoint: number;

  const handleScroll = () => {
    if (
      headerRef &&
      headerRef.current &&
      headerRef.current.getBoundingClientRect()
    ) {
      setSticky(window.scrollY >= stickyPoint + 6);
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
        <h1 ref={titleRef} className={`headerTitle ${headerClass}`} onAnimationEnd={() => {setContent('Joe Frazier'); setHeaderClass('text-primary')}}>{content}</h1>
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
