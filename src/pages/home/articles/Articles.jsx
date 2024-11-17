import React from "react";
import Card from "../../../components/card/Card";
import { useInView } from "react-intersection-observer";
import img from "../../../assets/image2.jpg"

const Articles = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      })

      const handleArticleClick = () => {
        navigate("/article/:id");
      };

  return (
    <div className="bg-GrayBg p-10 flex flex-col">
      <h2 className="text-white font-unbounded font-medium text-5xl mb-10">
        СТАТЬИ
      </h2>
        <Card 
        img={img}
        text="Эпос 'Манас'"
        price={"1500"}
        />
        <Card 
        img={img}
        text="Эпос 'Манас'"
        price={"1500"}
        />
        <Card 
        img={img}
        text="Эпос 'Манас'"
        price={"1500"}
        />
    </div>
  );
};

export default Articles;
