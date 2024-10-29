import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between my-[40px] px-[40px] gap-[172px]">
      <a href='/' className="text-[24px] font-bold font-unbounded">
        Jash Story
      </a>

      {/* Burger Menu Button for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav aria-label="Main Navigation" className="hidden lg:flex font-sf">
        <ul className="flex gap-12 hover:cursor-pointer">
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Мировая история</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">История Кыргызстана</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Олимпиадная история</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">О нас</li>
        </ul>
      </nav>

    
      <div
        className={`${
          isMenuOpen ? 'max-h-[300px]' : 'max-h-0'
        } overflow-hidden transition-all duration-500 ease-in-out absolute top-[80px] left-0 w-full bg-white lg:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Мировая история</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">История Кыргызстана</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Олимпиадная история</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">О нас</li>
        </ul>
      </div>
      {/* {isMenuOpen && (
        <nav className="absolute top-[80px] left-0 w-full bg-white lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Мировая история</li>
            <li className="hover:text-[20px] transition-all duration-300 ease-in-out">История Кыргызстана</li>
            <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Олимпиадная история</li>
            <li className="hover:text-[20px] transition-all duration-300 ease-in-out">О нас</li>
          </ul>
        </nav>
      )} */}

      {/* Login Button */}
      <p className="hidden lg:block text-white bg-[#333335] rounded-[45px] text-2xl px-[27px] py-[4px] hover: transition-all duration-300 ease-in-out">
        Войти
      </p>
    </header>
  );
};

export default Header;
