import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import style from "./Catalog.module.scss";
import Card from "../../components/card/Card";
import img from "../../assets/image2.jpg"

const Catalog = () => {
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
    <>
      <Header />
      <div className={style.mainDiv}>
        <div className="my-auto flex flex-col gap-[20px] md:gap-[40px] justify-center items-center px-4 md:px-0">
          <p className="text-[52px] font-unbounded font-bold md:text-[52px] text-white text-center w-[90%] md:w-[70%]">
            Каталог
          </p>
        </div>
      </div>
      <div className="relative my-auto flex justify-center items-center mx-[40px] mt-14">
        <input
          type="text"
          className="w-screen py-2 pr-14 pl-4 border h-[60px] border-black rounded-[20px] focus:outline-none"
        />
        <button className="absolute right-[7px] top-1/2 transform -translate-y-1/2 text-gray-500">
          <img src="/src/assets/searchIcon.svg"/>
        </button>
      </div>
      <div className="m-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-11">
      {cards.map((card) => (
          <Card
            key={card.id}
            img={card.image}
            text={card.title}
            price={"100$"}
            bgColor="bg-[#E5E5E5]"
          />
        ))}
      </div>
      <div className="mt-[52px] mb-[52px] flex justify-center">
        <button className="rounded-[29px] text-white text-[22px] font-medium bg-[#333335] px-[27px] py-[4px] hover:opacity-90 transition-all duration-300 ease-in-out">
          Показать больше
        </button>
      </div>
    </>
  );
};

export default Catalog;
