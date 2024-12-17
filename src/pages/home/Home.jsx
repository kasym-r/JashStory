import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import MainInfo from "./mainInfo/MainInfo";
import Footer from "../../components/footer/Footer";
import Resources from "./resources/Resources";
import img from "../../assets/image2.jpg"
import OlympiadHistory from "./olympiadHistory/OlympiadHistory";
import BestArticles from "./bestArticles/BestArticles";
import Articles from "./articles/Articles";

const Home = () => {

  return (
    <>
      <Header />
      <MainInfo />
      <Resources />
      <Articles />
      <OlympiadHistory />
      {/* <BestArticles /> */}
      <Footer />
    </>
  );
};

export default Home;
