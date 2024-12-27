import React from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const OlympiadHistory = () => {
  const { language } = useLanguage();
  const navigate = useNavigate()

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleCatalogClick = () => {
    navigate("/catalog")
  }

  return (
    <div className="flex flex-col px-5 md:px-10 items-center justify-center bg-olymp-bg bg-cover bg-center h-[400px] md:h-[500px] text-white">
      <div
        ref={ref}
        className={`flex flex-col items-center
        transition-opacity duration-700 ease-in-out 
        transform ${inView ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="font-unbounded font-medium text-center text-xl md:text-4xl xl:text-5xl">
          {language === "en" ? "Olympiad History" : "Олимпиадная История"}
        </h2>
        <p className="mt-2 font-sf font-light text-[15px] xl:text-base lg:font-normal text-center">
          {language === "en" ? (
            <>
              Here you will find fascinating tests on world and national
              history, advanced level articles and many other useful <br/> materials
              for successful preparation for Olympiads and various tests, as
              well as for in-depth study of historical events.
            </>
          ) : (
            <>
              Здесь вы найдете увлекательные тесты по мировой и отечественной
              истории, статьи углубленного уровня и множество других полезных <br />
              материалов для успешной подготовки к олимпиадам и разным тестам, а
              также для глубокого изучения исторических событий.
            </>
          )}
        </p>
        <button onClick={handleCatalogClick} className="mt-10 font-sf w-[200px] md:w-[234px] font-medium md:text-xl text-white px-[15px] py-[8px] border-white border-2 rounded-[24px]">
          {language === "en" ? "All articles" : "Все статьи"}
        </button>
      </div>
    </div>
  );
};

export default OlympiadHistory;
