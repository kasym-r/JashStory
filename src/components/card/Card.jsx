import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Card = ({ img, text, price }) => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleArticleClick = () => {
    navigate("/article/:id");
  };

  return (

      <div
        ref={ref}
        className={`bg-white  rounded-[15px]  flex flex-col p-[20px] gap-4 
      transition-opacity duration-700 ease-in-out 
      transform ${inView ? "opacity-100" : "opacity-0"}`}
      >
        <img
          className="w-[384px] h-[166px] rounded-[23px]"
          src={img}
          alt="img"
        />
        <p className="font-medium text-xl">{text}</p>
        <div className="flex justify-between mt-[10px]">
          <span className="font-medium text-[24px]">{price}</span>
          <button
            onClick={handleArticleClick}
            className="bg-[#434343] text-white w-[186px] rounded-[24px] hover:opacity-90 transition-all duration-300 ease-in-out"
          >
            Читать
          </button>
        </div>
      </div>
  );
};

export default Card;
