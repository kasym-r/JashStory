import React, { useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Project from "./project/Project";
import Team from "./team/Team";
import PrevOlympiads from "./prevOlympiads/PrevOlympiads";
import { useLocation } from "react-router-dom";

const About = () => {
  const prevOlympiadsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#prev-olympiads" && prevOlympiadsRef.current) {
      prevOlympiadsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Project />
      <Team />
      <div ref={prevOlympiadsRef}>
        <PrevOlympiads />
      </div>
      <Footer />
    </>
  );
};

export default About;
