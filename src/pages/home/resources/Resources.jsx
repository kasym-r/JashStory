import React from "react";
import img from "../../../assets/Rectangle.svg";
import img1 from "../../../assets/Rectangle1.svg";
import img2 from "../../../assets/Rectangle2.svg";
import img3 from "../../../assets/Rectangle3.svg";

const Resources = () => {
  return (
    <div className="bg-GrayBg py-10">
      <div className="grid grid-cols-2 gap-10 mx-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="font-unbounded text-5xl font-medium text-white leading-tight">
            ПОЛНЫЕ РЕСУРСЫ <br /> ДЛЯ{" "}
            <span className="text-[#CC67F8]">ПОБЕДЫ</span> B{" "}
            <span className="text-[#CC67F8]">ОЛИМПИАДАХ</span>
          </p>
            <img src={img} className="w-full h-auto rounded-2xl" />
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-sfpro text-white font-normal text-lg">
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
          <div className="grid grid-rows-2 grid-cols-2 gap-10">
            <div className="row-span-1 col-span-2 relative">
              <img
                src={img1}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            </div>
            <div className="row-span-1 col-span-1 relative">
              <img
                src={img2}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            </div>
            <div className="row-span-1 col-span-1 relative">
              <img
                src={img3}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
