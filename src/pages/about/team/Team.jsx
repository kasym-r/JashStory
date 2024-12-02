import React from "react";
import kasym from './pics/kasym.svg'

const Team = () => {
  return (
    <div className="px-10 flex flex-col bg-[#F9F8F7]">
      <h2 className="font-unbounded font-medium text-[42px] text-[#303030]">
        НАША КОМАНДА
      </h2>
      <div className="flex justify-between w-full mt-9 mb-10">
        <span className="text-base font-unbounded max-w-[36%]">
          КОМАНДА JASH STORY ОБЪЕДИНЕНА <span className="text-[#CC67F8]">ЛЮБОВЬЮ К ИСТОРИИ</span>
        </span>
        <span className="font-sfpro font-normal text-[#343434] text-lg max-w-[34%]">
          На нашем сайте представлены эксклюзивные ресурсы, которые не только
          помогают в подготовке, но и вдохновляют на изучение истории. Мы
          стремимся сделать обучение простым и увлекательным, предоставляя все
          необходимые инструменты для достижения успеха.
        </span>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-10">
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2 items-start text-[#4A4A4A]">
          <img src={kasym}/>
          <button className="border-[1.5px] border-[#4A4A4A] rounded-3xl ml-[5px] px-7">Kasym Rakhmatyllo</button>
          <span className="font-sfpro">Frontend Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
