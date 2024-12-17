import React from "react";
import { useState, useEffect } from "react";
import Card from "../../../components/card/Card";
import { useInView } from "react-intersection-observer";
import img from "../../../assets/image2.jpg"

const Articles = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jashstory.pp.ua/api/post/");
        const data = await response.json();
        setCards(data.results);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-GrayBg p-4 md:p-10 flex flex-col">
      <h2 className="text-white font-unbounded font-medium text-4xl md:text-5xl mb-10">
        СТАТЬИ
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-11">
        {cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            img={card.image}
            text={card.title}
            bgColor="bg-white"
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
