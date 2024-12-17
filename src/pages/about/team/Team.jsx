import React from "react";
import daniel from './pics/daniel.svg'
import isadora from './pics/isadora.svg'
import kasym from './pics/kasym.svg'
import amaliya from './pics/amaliya.svg'
import amina from './pics/amina.svg'
import saida from './pics/saida.svg'
import ramzan from './pics/ramzan.svg'
import bibinur from './pics/bibinur.svg'
import nurdin from './pics/nurdin.svg'
import sezimtal from './pics/sezimtal.svg'

const Team = () => {
  return (
    <div className="px-10 flex flex-col">
      <h2 className="font-unbounded font-medium md:text-4xl xl:text-[42px] text-[#303030]">
        НАША КОМАНДА
      </h2>
      <div className="flex justify-between w-full mt-9 mb-10">
        <span className="text-base font-unbounded max-w-[36%]">
          КОМАНДА JASH STORY ОБЪЕДИНЕНА <span className="text-[#CC67F8]">ЛЮБОВЬЮ К ИСТОРИИ</span>
        </span>
        <span className="font-sfpro font-normal text-[#343434] md:text-sm xl:text-lg max-w-[34%]">
          На нашем сайте представлены эксклюзивные ресурсы, которые не только
          помогают в подготовке, но и вдохновляют на изучение истории. Мы
          стремимся сделать обучение простым и увлекательным, предоставляя все
          необходимые инструменты для достижения успеха.
        </span>
      </div>
      <div className="grid md:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-10 md:text-sm xl:text-lg">
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={daniel}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Daniel Satybaldiev</button>
          <span className="font-sfpro">Founder & CEO</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={isadora}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Isadora Chokmorova</button>
          <span className="font-sfpro">Co-founder & Designer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend & Team Lead</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={amaliya}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Amaliya Yryskeldieva</button>
          <span className="font-sfpro">Illustrator</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={amina}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Amina Anarkulova</button>
          <span className="font-sfpro">Face of the project</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={saida}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Saida Namasbekova</button>
          <span className="font-sfpro">SMM specialist</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={ramzan}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Ramzan Satkynov</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={bibinur}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Bibinur Latipzhanova</button>
          <span className="font-sfpro">Designer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={nurdin}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Nurdin Taabaldyev</button>
          <span className="font-sfpro">Backend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={sezimtal}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Sezimtal Tilekmatova</button>
          <span className="font-sfpro">Marketer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
