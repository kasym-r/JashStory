import React from "react";
import logowhite from "../../assets/logowhite.svg";
import googlelogo from '../../assets/googlelogo.svg';

const Login = () => {
  return (
    <div className="bg-login-bg bg-cover bg-center h-[96vh] rounded-[40px] m-5 p-5 grid grid-cols-2">
      <div className="flex flex-col items-center text-white gap-6 px-40 pt-5 relative">
        <a href="/">
            <img className="w-10 h-10" src={logowhite} alt="logowhite" />
        </a>
        <span className="font-helvetica text-6xl font-extrabold">
          Jash Story
        </span>
        <span className="font-light font-sf text-2xl">
          После регистрации мы создадим ваш единный аккаунт ММСО-ID для участия
          в будущих мероприятиях ММСО
        </span>
      </div>
      <div className="bg-white rounded-[40px] flex flex-col items-center gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 items-center">
            <span className="text-6xl font-medium">Вход</span>
            <span className="font-sf text-[#83888F]">Ещё нет аккаунта? <span className="text-[#DD9AFA]">Регистрация</span></span>
          </div>
          <div className="text-lg flex flex-col gap-4">
            <span>Войдите через соцсеть</span>
            <button className="flex flex-col items-center font-medium text-sm">
                <img src={googlelogo} alt="googlelogo" />
                Google
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <span>Или с помощью почты и пароля</span>
                <label>E-mail</label>
                <input type="text" placeholder="example@gmail.com" />
                <input type="text" placeholder="Пароль" />
            </div>
            <div className="flex flex-col gap-4">
                <button className="bg-[#DD9AFA] rounded-xl p-5 text-white text-lg font-normal">Войти</button>
                <span className="text-[#83888F]">Забыли пароль? <span className="text-[#DD9AFA]">Восстановите здесь</span></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
