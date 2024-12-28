import React from "react";
import daniel from "./pics/daniel.svg";
import isadora from "./pics/isadora.svg";
import kasym from "./pics/kasym.svg";
import amaliya from "./pics/amaliya.svg";
import amina from "./pics/amina.svg";
import saida from "./pics/saida.svg";
import ramzan from "./pics/ramzan.svg";
import bibinur from "./pics/bibinur.svg";
import nurdin from "./pics/nurdin.svg";
import sezimtal from "./pics/sezimtal.svg";
import { useLanguage } from "../../../context/LanguageContext";

const Team = () => {
  const { language } = useLanguage();

  return (
    <div className="px-4 md:px-10 flex flex-col">
      <h2 className="font-unbounded font-medium text-3xl md:text-4xl xl:text-[42px] text-[#303030]">
        {language === "en" ? "OUR TEAM" : "НАША КОМАНДА"}
      </h2>
      <div className="flex flex-col gap-3 md:flex-row justify-between w-full mt-9 mb-10">
        <span className="text-base font-unbounded md:max-w-[45%] lg:max-w-[36%]">
          {language === "en" ? (
            <>
              The Jash Story team is united by a{" "}
              <span className="text-[#CC67F8]">love for history</span>.
            </>
          ) : (
            <>
              КОМАНДА JASH STORY ОБЪЕДИНЕНА{" "}
              <span className="text-[#CC67F8]">ЛЮБОВЬЮ К ИСТОРИИ</span>.
            </>
          )}
        </span>
        <span className="font-sfpro font-normal text-[#343434] text-sm xl:text-lg md:max-w-[45%] lg:max-w-[34%]">
          {language === "en"
            ? "Our website offers exclusive resources that not only help in preparation but also inspire the study of history. We aim to make learning simple and engaging, providing all the necessary tools for success."
            : "На нашем сайте представлены эксклюзивные ресурсы, которые не только помогают в подготовке, но и вдохновляют на изучение истории. Мы стремимся сделать обучение простым и увлекательным, предоставляя все необходимые инструменты для достижения успеха."}
        </span>
      </div>
      <div className="grid mx-auto grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-sm lg:text-sm xl:text-lg">
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={daniel} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Daniel Satybaldiev
          </span>
          <span className="font-sfpro">Founder & CEO</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={isadora} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Isadora Chokmorova
          </span>
          <span className="font-sfpro">Co-founder & Designer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Kasym Rakhmatyllo
          </span>
          <span className="font-sfpro">Frontend & Team Lead</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={amaliya} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Amaliya Yryskeldieva
          </span>
          <span className="font-sfpro">Illustrator</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={amina} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Amina Anarkulova
          </span>
          <span className="font-sfpro">Ambassador</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={saida} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Saida Namasbekova
          </span>
          <span className="font-sfpro">SMM manager</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={ramzan} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Ramzan Satkynov
          </span>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={bibinur} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Bibinur Latipzhanova
          </span>
          <span className="font-sfpro">Designer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={nurdin} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Nurdin Taabaldyev
          </span>
          <span className="font-sfpro">Backend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={sezimtal} />
          <span className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">
            Sezimtal Tilekmatova
          </span>
          <span className="font-sfpro">Marketer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
