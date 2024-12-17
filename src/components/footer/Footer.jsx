import React from "react";
import styles from "./Footer.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logowhite from "../../assets/logowhite.svg";

const Footer = () => {
  return (
    <footer className={`flex flex-col items-center md:pt-[140px] md:h-[450px] ${styles.footer}`}>
      <p className={`hidden md:block ${styles.contact}`}>CONTACT</p>
      <div className="container mx-auto px-4 md:px-5 flex flex-col gap-5 md:flex-row justify-center md:gap-24 lg:gap-28 xl:justify-between items-center">
        <div className="flex flex-col items-center">
          <h3 className="flex items-center gap-1 text-lg font-bold">
            <img src={logowhite} alt="logowhite" />
            Jash Story
          </h3>
          <p className="mt-2">
            Свяжитесь с нами любым <br /> удобным способом
          </p>
          <div className={`${styles.iconContainer} flex mt-4`}>
            <a
              href="https://www.instagram.com/jash_story_/"
              className={styles.icon}
            >
              <i className={`fab fa-instagram ${styles.instagram}`}></i>
            </a>
            <a href="https://wa.me/996220140041" className={styles.icon}>
              <i className={`fab fa-whatsapp ${styles.whatsapp}`}></i>
            </a>
            <a
              href="https://t.me/+6SGu9MxHxEYyNWRi?fbclid=PAZXh0bgNhZW0CMTEAAaaiYoZoNbsGPUni-Lqbt0w863PVzj7mUk3Wpz5uFDexhitIjPQNUhWs2Vc_aem_QUSPRQmxf49YgddfDFQ2ig"
              className={styles.icon}
            >
              <i className={`fab fa-telegram ${styles.telegram}`}></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">Контакты</h3>
          <p className="mt-2">+996 220 140 041</p>
          <p className="mt-2">jash_story@gmail.com</p>
          <p className="mt-2">г. Бишкек</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">Для клиентов</h3>
          <ul className="mt-2 space-y-2 text-center">
            <li>
              <a href="/about" className="hover:underline">
                О нас
              </a>
            </li>
            <li>
              <a href="/olympiads" className="hover:underline">
                Олимпиады
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:underline">
                Отзывы
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
