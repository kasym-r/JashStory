import React from "react";
import img from "../../../assets/Rectangle.svg";
import img1 from "../../../assets/Rectangle1.svg";
import img2 from "../../../assets/Rectangle2.svg";
import img3 from "../../../assets/Rectangle3.svg";

const Resources = () => {
  return (
    <>
      <div className="flex gap-[40px]">
        <div>
          <p>Полные ресурсы для победы в олимпиадах</p>
          <img src={img} />
        </div>
        <div>
          <p>
            Jash Story предлагает уникальные материалы и ресурсы для подготовки
            к школьным олимпиадам по истории. Мы тщательно отбираем книги,
            статьи и учебные пособия, которые помогут участникам глубже изучить
            историю Кыргызстана и мировую историю. Наши материалы разработаны с
            учетом уровня подготовки школьников и ориентированы на олимпиадные
            стандарты. На нашем сайте представлены эксклюзивные ресурсы, которые
            не только помогают в подготовке, но и вдохновляют на изучение
            истории. Мы стремимся сделать обучение простым и увлекательным,
            предоставляя все необходимые инструменты для достижения успеха.
          </p>
          <div className="grid grid-cols-2">
            <img src={img1} className="col-span-2" />
            <img src={img2} />
            <img src={img3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
