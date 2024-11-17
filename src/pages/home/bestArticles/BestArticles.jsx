import React from "react";
import { useInView } from "react-intersection-observer";

const BestArticles = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });

  return (
    <div className="flex items-center text-white bg-GrayBg p-10 gap-[600px]">
      <div ref={ref} className={`flex flex-col
      transition-opacity duration-700 ease-in-out 
      transform ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="font-unbounded font-medium text-5xl">
          ЛУЧШИЕ СТАТЬИ ПО ИСТОРИИ
        </h2>
        <button className="mt-5 font-sf w-[200px] md:w-[234px] font-medium md:text-xl px-[15px] py-[8px] border-white border-2 rounded-[24px]">
          Узнать подробнее
        </button>
      </div>
      <div>
        <p className="font-sf font-medium text-lg">
          Мы регулярно публикуем статьи, которые помогут вам лучше понять
          ключевые моменты истории Кыргызстана и мировой истории. Наши материалы
          охватывают широкий спектр тем, начиная от древних цивилизаций и
          заканчивая современными событиями. <br/><br/> Все статьи написаны экспертами и
          разработаны специально для школьников, чтобы сделать обучение
          интересным и доступным.
        </p>
      </div>
    </div>
  );
};

export default BestArticles;
