import React from "react";
import { useState, useEffect } from "react";
import Card from "../../../components/card/Card";
import { useLanguage } from "../../../context/LanguageContext";

const Articles = () => {
  const { language } = useLanguage()
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jashstory.pp.ua/api/post/", {
          headers: {
            'Accept-Language': language,
          },
        });
        const data = await response.json();
        setCards(data.results);
      } catch (error) {
        console.error("Ошибка загрузки статьи:", error);
        setError(language === "en" ? "Failed to load articles" : "Не удалось загрузить статью");
      }
    };

    fetchData();
  }, [language]);

  return (
    <div className="bg-GrayBg p-4 md:p-10 flex flex-col">
      <h2 className="text-white font-unbounded font-medium text-4xl md:text-5xl mb-10">
        {language === "en" ? "ARTICLES" : "СТАТЬИ"}
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-11">
        {cards.slice(0, 6).map((card) => (
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
