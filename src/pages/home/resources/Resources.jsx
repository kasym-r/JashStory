import React from "react";
import img from "../../../assets/Rectangle.svg";
import img1 from "../../../assets/Rectangle1.svg";
import img2 from "../../../assets/Rectangle2.svg";
import img3 from "../../../assets/Rectangle3.svg";
import { useInView } from "react-intersection-observer";

const Resources = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-GrayBg py-10">
      <div className="grid grid-cols-2 gap-10 mx-10">
        <div className="flex flex-col justify-center">
          <p className="font-unbounded text-5xl font-medium text-white leading-tight">
            ПОЛНЫЕ РЕСУРСЫ <br /> ДЛЯ <span className="text-[#CC67F8]">ПОБЕДЫ</span> В <span className="text-[#CC67F8]">ОЛИМПИАДАХ</span>
          </p>
        </div>
        <div className="justify-center">
          <p className="font-sf text-white font-light text-lg" >
            Jash Story предлагает уникальные материалы и ресурсы для подготовки
            к школьным олимпиадам по истории. Мы тщательно отбираем книги,
            статьи и учебные пособия, которые помогут участникам глубже изучить
            историю Кыргызстана и мировую историю. Наши материалы разработаны с
            учетом уровня подготовки школьников и ориентированы на олимпиадные
            стандарты. <br /> <br /> На нашем сайте представлены эксклюзивные
            ресурсы, которые не только помогают в подготовке, но и вдохновляют
            на изучение истории. Мы стремимся сделать обучение простым и
            увлекательным, предоставляя все необходимые инструменты для
            достижения успеха.
          </p>
        </div>

        <div ref={ref} className={`relative 
        transition-opacity duration-700 ease-in-out 
        transform ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <img src={img} className="w-full h-auto rounded-3xl" />
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        </div>
        <div ref={ref} className={`grid grid-rows-2 grid-cols-2 gap-10
        transition-opacity duration-700 ease-in-out 
        transform ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div ref={ref} className="row-span-1 col-span-2 relative">
            <img src={img1} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          </div>
          <div className="row-span-1 col-span-1 relative">
            <img src={img2} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          </div>
          <div className="row-span-1 col-span-1 relative">
            <img src={img3} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
