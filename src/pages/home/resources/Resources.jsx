import React from "react";
import img from "../../../assets/babilontower.svg";
import img1 from "../../../assets/fallofrome.svg";
import img2 from "../../../assets/napoleonwar.svg";
import img3 from "../../../assets/europe.svg";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../../context/LanguageContext";

const Resources = () => {
  const { language } = useLanguage();

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-GrayBg py-10">
      <div className="grid lg:grid-cols-2 gap-10 mx-4 md:mx-10">
        <div className="flex flex-col justify-center">
          <p className="font-unbounded text-3xl md:text-4xl xl:text-5xl font-medium text-white leading-tight">
            {language === "en" ? (
              <>
                COMPLETE RESOURCES <br /> FOR{" "}
                <span className="text-[#CC67F8]">SUCCESS</span> IN{" "}
                <span className="text-[#CC67F8]">OLYMPIADS</span>
              </>
            ) : (
              <>
                ПОЛНЫЕ РЕСУРСЫ <br /> ДЛЯ{" "}
                <span className="text-[#CC67F8]">ПОБЕДЫ</span> В{" "}
                <span className="text-[#CC67F8]">ОЛИМПИАДАХ</span>
              </>
            )}
          </p>
        </div>
        <p className="font-sf text-white font-light text-base xl:text-lg">
          {language === "en" ? (
            <>
              Jash Story offers unique materials and resources to prepare for
              school history olympiads. We carefully select books, articles, and
              study guides that help participants gain deeper insights into the
              history of Kyrgyzstan and world history. Our materials are
              tailored to the students' level and aligned with olympiad
              standards. <br /> <br />
              Our website features exclusive resources that not only assist in
              preparation but also inspire a love for history. We strive to make
              learning simple and engaging by providing all the necessary tools
              for success.
            </>
          ) : (
            <>
              Jash Story предлагает уникальные материалы и ресурсы для
              подготовки к школьным олимпиадам по истории. Мы тщательно отбираем
              книги, статьи и учебные пособия, которые помогут участникам глубже
              изучить историю Кыргызстана и мировую историю. Наши материалы
              разработаны с учетом уровня подготовки школьников и ориентированы
              на олимпиадные стандарты. <br /> <br /> На нашем сайте
              представлены эксклюзивные ресурсы, которые не только помогают в
              подготовке, но и вдохновляют на изучение истории. Мы стремимся
              сделать обучение простым и увлекательным, предоставляя все
              необходимые инструменты для достижения успеха.
            </>
          )}
        </p>

        <div
          ref={imgRef}
          className={`
        transition-opacity duration-700 ease-in-out 
        transform ${imgInView ? "opacity-100" : "opacity-0"}`}
        >
          <img src={img} className="w-full h-full rounded-3xl" />
        </div>
        <div
          ref={gridRef}
          className={`grid grid-rows-2 grid-cols-2 gap-10
        transition-opacity duration-700 ease-in-out 
        transform ${gridInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="row-span-1 col-span-2">
            <img
              src={img1}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              src={img2}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              src={img3}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
