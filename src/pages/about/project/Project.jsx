import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import img from "../../../assets/photoofall.jpg";

const Project = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 my-5 md:my-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:gap-3 xl:gap-8">
        <h2 className="font-unbounded mb-3 text-2xl md:text-4xl xl:text-5xl font-medium">
          {language === "en" ? "ABOUT THE PROJECT" : "О ПРОЕКТЕ"}
        </h2>
        <p className="text-[#4A4A4A] font-sfpro text-sm lg:text-sm xl:text-lg">
          {language === "en" ? (
            <>
              Jash Story is an educational project that combines the study of
              Kyrgyzstan's history with world history. We organize school
              olympiads, develop preparation materials, and provide access to
              useful books. Our website will become a platform where everyone
              can find in-depth information and resources for effective
              learning. <br /> <br />
              The project was created by teenagers passionate about history, who
              decided to share their knowledge with others. Starting with an
              Instagram page, they received enormous support, which motivated
              them to continue. <br /> <br />
              Many team members are winners and prize-winners of various history
              olympiads, which confirms the high level of their knowledge.{" "}
              <br /> <br />
              Jash Story offers unique and useful materials accessible to
              everyone who wants to deepen their knowledge and better understand
              history.
            </>
          ) : (
            <>
              Jash Story — это образовательный проект, который объединяет
              изучение истории Кыргызстана и мировой истории. Мы организуем
              школьные олимпиады, разрабатываем материалы для подготовки и
              предоставляем доступ к полезным книгам. Наш сайт станет
              платформой, на которой каждый сможет найти углубленную информацию
              и ресурсы для эффективного обучения. <br /> <br />
              Проект был создан подростками, увлеченными историей, которые
              решили делиться своими знаниями с другими. Начав с
              инстаграм-страницы, они получили огромную поддержку, что стало
              мотивом для продолжения работы. <br /> <br />
              Многие участники команды — победители и призеры различных олимпиад
              по истории, что подтверждает высокий уровень их знаний. <br />{" "}
              <br />
              Jash Story предлагает уникальные и полезные материалы, доступные
              для всех, кто хочет углубить свои знания и лучше понять историю.
            </>
          )}
        </p>
      </div>
      <div>
        <img src={img} className="w-full rounded-3xl" />
      </div>
    </div>
  );
};

export default Project;
