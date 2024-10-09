import React from "react";
import styles from "./Footer.module.scss"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {

  return (
      <footer className={styles.footer}>
        <p className={styles.contact}>CONTACT</p>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold">Jash Story</h3>
            <p className="mt-2">Свяжитесь с нами любым <br /> удобным способом</p>
            <div className={`${styles.iconContainer} flex mt-4`}>
              <a href="https://instagram.com" className={styles.icon}>
                <i className={`fab fa-instagram ${styles.instagram}`}></i>
              </a>
              <a href="https://whatsapp.com" className={styles.icon}>
                <i className={`fab fa-whatsapp ${styles.whatsapp}`}></i>
              </a>
              <a href="https://telegram.com" className={styles.icon}>
                <i className={`fab fa-telegram ${styles.telegram}`}></i>
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold">Контакты</h3>
            <p className="mt-2">+996 220 140 041</p>
            <p className="mt-2">jash_story@gmail.com</p>
            <p className="mt-2">г. Бишкек</p>
            <p className="mt-2">Работаем с 8:00–21:00</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Для клиентов</h3>
            <ul className="mt-2 space-y-2">
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
              <li>
                <a href="/team" className="hover:underline">
                  Команда
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
