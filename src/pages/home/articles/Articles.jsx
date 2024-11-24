import React from "react";
import Card from "../../../components/card/Card";
import { useInView } from "react-intersection-observer";
import img from "../../../assets/image2.jpg"

const Articles = () => {

  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://jashstory.pp.ua/api/post/");
  //       const data = await response.json();
  //       setCards(data.results);
  //     } catch (error) {
  //       console.error("Ошибка при получении данных:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            img={card.image}
            text={card.title}
            price={"1500"} 
          />
        ))}
      </div> */}
    </div>
  );
};

export default Articles;
