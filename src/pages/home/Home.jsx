import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import MainInfo from "./mainInfo/MainInfo";
import Footer from "../../components/footer/Footer";
import Resources from "./resources/Resources";

const Home = () => {
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const response = await fetch("https://jashstory.pp.ua/api/post/");
  //   //     const data = await response.json();
  //   //     setCards(data.results);
  //   //   } catch (error) {
  //   //     console.error("Ошибка при получении данных:", error);
  //   //   }
  //   // };

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <MainInfo />

      {/* <div className="flex  flex-wrap gap-11 justify-center mt-11">
        {cards.map((card) => (
          <Card
            key={card.id}
            img={card.image}
            text={card.title}
            price={"1500"}
          />
        ))} 
      </div>  */}
      <Resources />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
