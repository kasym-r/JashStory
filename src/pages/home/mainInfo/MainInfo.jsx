import { useNavigate } from "react-router-dom";
import style from "./MainInfo.module.scss";

const MainInfo = () => {
  const navigate = useNavigate();
  
  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={style.mainDiv}>
      <div className="my-auto flex flex-col gap-[20px] md:gap-[40px] justify-center items-center px-4 md:px-0">
        <p className="text-[32px] md:text-[52px] text-white font-medium text-center w-[90%] md:w-[70%] font-unbounded">
          Народ не знающий свою историю лишает себя корней
        </p>

        <div className="text-center flex flex-col sm:flex-row gap-[10px] md:gap-[20px] justify-center font-sf">
          <button
            onClick={handleCatalogClick}
            className="w-[200px] md:w-[234px] bg-[#CC67F8] font-medium md:text-xl text-white py-[8px] px-[10px] rounded-[24px]"
          >
            Смотреть Каталог
          </button>
          <button className="w-[200px] md:w-[234px] font-medium md:text-xl text-white px-[15px] py-[8px] border-white border-2 rounded-[24px]">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
