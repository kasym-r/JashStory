import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Project from "./project/Project";
import Team from "./team/Team";
import PrevOlympiads from "./prevOlympiads/PrevOlympiads";

const About = () => {
  return (
    <>
    <Header />
    <Project />
    <Team />
    <PrevOlympiads />
    <Footer />
    </>
  );
};

export default About;
