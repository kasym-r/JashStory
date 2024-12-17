import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import style from "./Catalog.module.css";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import search from '../../assets/searchIcon.svg'

const Catalog = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => setAccordionOpen(!isAccordionOpen);

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
  
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className={style.mainDiv}>
        <div className="my-auto flex flex-col gap-[20px] md:gap-[40px] justify-center items-center px-4 md:px-0">
          <p className="text-3xl md:text-[50px] font-unbounded font-bold text-white text-center w-[90%] md:w-[70%]">
            Каталог
          </p>
        </div>
      </div>
      <div className="relative my-auto flex gap-3 items-center mx-4 md:mx-10 mt-14 font-sf font-light">
        <input
          type="text"
          className="w-screen relative py-2 pr-14 pl-4 border h-[60px] border-black rounded-[20px] focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск по названию"
        />
        <button className="absolute right-[7px] top-1/2 transform -translate-y-1/2 text-gray-500">
          <img src={search} />
        </button>
        {/* <div className="">
          <button
            onClick={toggleAccordion}
            className=" py-2 px-4 bg-white rounded-[40px] border border-black"
          >
            Где?
          </button>
          {isAccordionOpen && (
            <div className="absolute z-10 right-0 top-[100%] bg-white shadow-md transtion-all duration-300 ease-in-out">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transtion-all duration-300 ease-in-out">Category 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transtion-all duration-300 ease-in-out">Category 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transtion-all duration-300 ease-in-out">Category 3</li>
              </ul>
            </div>
          )}
        </div> */}
      </div>
      <div className="m-4 md:m-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-3 lg:gap-11">
      {filteredCards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            img={card.image}
            text={card.title}
            bgColor="bg-[#E5E5E5]"
          />
        ))}
      </div>
      <div className="mt-[52px] mb-[52px] flex justify-center">
        <button className="rounded-[29px] text-white text-[22px] font-medium bg-[#333335] px-[27px] py-[4px] hover:opacity-90 transition-all duration-300 ease-in-out">
          Показать больше
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
