import { useNavigate } from "react-router-dom";
import style from "./MainInfo.module.css";
import { useLanguage } from "../../../context/LanguageContext";

const MainInfo = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={style.mainDiv}>
      <div className="my-auto flex flex-col gap-6 md:gap-[40px] justify-center items-center px-4 md:px-0 py-32 md:h-screen">
        <p className="text-3xl md:text-[50px] text-white font-medium text-center w-[90%] md:w-[70%] font-unbounded leading-tight">
          {language === 'en' ? 'A nation that does not know its history deprives itself of its roots' : 'Народ не знающий свою историю лишает себя корней'}
        </p>

        <div className="font-sfpro text-center flex flex-col sm:flex-row gap-[10px] md:gap-[20px] justify-center">
          <button
            onClick={handleCatalogClick}
            className="w-[200px] md:w-[234px] bg-[#CC67F8] font-medium md:text-xl text-white py-[8px] px-[10px] rounded-[24px]"
          >
          {language === 'en' ? 'View catalog' : 'Смотреть каталог'}
          </button>
          <button className="w-[200px] md:w-[234px] font-medium md:text-xl text-white px-[15px] py-[8px] border-white border-2 rounded-[24px]">
          {language === 'en' ? 'Learn more' : 'Узнать больше'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
