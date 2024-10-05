import React from "react";
import style from "./OlympHistory.module.css";

const OlympHistory = () => {
  return (
    <div className={style.mainDiv}>
      <div className="flex flex-col justify-center items-center text-white gap-14">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-[52px] font-bold">Олимпиадная История</h1>
          <p className="font-bold break-normal max-w-[50%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            aperiam asperiores, beatae sit at earum ad aliquam! Recusandae rerum
            iusto quidem sint nihil optio ratione corporis sed sunt? Nobis,
            magni.
          </p>
        </div>
        <button className="bg-none border-white border-2 rounded-[26px] px-[46px] py-[10px] font-semibold text-2xl">
          Все статьи
        </button>
      </div>
    </div>
  );
};

export default OlympHistory;
