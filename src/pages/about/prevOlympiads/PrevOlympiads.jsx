import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import prevolymp from '../../../assets/prevolymp1.jpeg';

const PrevOlympiads = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Previous Olympiads",
      intro:
        "Our project not only shares articles, resources, and various materials but also organizes History Olympiads for school students several times a year with excellent prizes to solidify their knowledge and motivate them to continue studying history.",
      details: `
        Our project not only publishes materials on history but also actively organizes Olympiads for school students. These events help participants consolidate their knowledge, prepare for national Olympiads, and provide great motivation to showcase their skills and earn valuable prizes. 
        We have already conducted 4 Olympiads, with over 400 participants in total. Here’s a brief overview of each: 
        First Olympiad — July 29, 2023: 15 participants, prize fund of 8,000 KGS. 
        Second Olympiad — November 4, 2023: 90 participants, prize fund of 120,000 KGS. 
        Third Olympiad — April 27, 2024: 130 participants, prize fund of 1,300,000 KGS. 
        Fourth Olympiad — November 16, 2024: Over 150 participants, prize fund exceeding 1.5 million KGS. 
        We take pride in the growing number of participants in each Olympiad and their contribution to fostering interest in history.
      `,
    },
    ru: {
      title: "Проведенные Олимпиады",
      intro:
        "Наш проект не только делиться статьями, ресурсами и разными материалами, но также мы проводим специально для школьников по несколько раз в год Олимпиады по истории с отличными призами, для закрепления их знаний и мотивации продолжать дальше изучать историю.",
      details: `
        Наш проект не только публикует материалы по истории, но и активно организует олимпиады для школьников. Эти мероприятия помогают участникам закрепить свои знания, подготовиться к республиканским олимпиадам, а также стать отличной мотивацией для демонстрации своих навыков и получения достойных призов. 
        Мы уже провели 4 олимпиады, в которых приняли участие более 400 человек. Вот краткий обзор каждой из них: 
        Первая олимпиада — 29 июля 2023 года: 15 участников, призовой фонд составил 8,000 сомов. 
        Вторая олимпиада — 4 ноября 2023 года: 90 участников, призовой фонд составил 120,000 сомов. 
        Третья олимпиада — 27 апреля 2024 года: 130 участников, призовой фонд составил 1,300,000 сомов. 
        Четвертая олимпиада — 16 ноября 2024 года: более 150 участников, призовой фонд превысил 1,5 миллиона сомов. 
        Мы гордимся тем, что каждая олимпиада собирает все больше участников и способствует развитию интереса к истории.
      `,
    },
  };

  const { title, intro, details } = language === "en" ? content.en : content.ru;

  return (
    <div className="px-4 md:px-10 py-10 md:py-20">
      <h1 className="font-unbounded font-medium text-2xl md:text-4xl xl:text-5xl text-[#303030] text-center">
        {title}
      </h1>
      <span className="flex lg:max-w-[40%] text-[#343434] font-sfpro lg:text-sm xl:text-lg my-7 md:my-12">
        {intro}
      </span>
      <div className="bg-white flex flex-col xl:flex-row items-center rounded-3xl md:gap-6 xl:gap-9 p-4 md:p-10 shadow-2xl">
        <div>
          <img className="rounded-3xl" src={prevolymp} alt="Previous Olympiads" />
        </div>
        <div className="xl:max-w-[50%]">
          <span className="text-[#343434] font-sfpro lg:text-sm xl:text-lg whitespace-pre-line">
            {details}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrevOlympiads;
