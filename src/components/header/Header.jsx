import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoblack from '../../assets/logoblack.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleLoginClick = () => {
    navigate("/login")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between my-7 md:my-10 px-4 md:px-10 gap-36">
      <a href='/' className="flex items-center gap-1 font-unbounded text-[24px] font-bold">
        <img src={logoblack}/>
        <span className='hidden sm:inline'>Jash Story</span>
      </a>

      {/* Burger Menu Button for Mobile */}
      <div className="xl:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav aria-label="Main Navigation" className="hidden xl:flex font-sf">
        <ul className="flex items-center gap-12 md:gap-8 hover:cursor-pointer text-[#393939] font-light">
          <li className="hover:text-[18px] transition-all duration-300 ease-in-out">Мировая история</li>
          <li className="hover:text-[18px] transition-all duration-300 ease-in-out">История Кыргызстана</li>
          <li className="hover:text-[18px] transition-all duration-300 ease-in-out">Олимпиадная история</li>
          <li onClick={handleAboutClick} className="hover:text-[18px] transition-all duration-300 ease-in-out">О нас</li>
        </ul>
      </nav>

      <div
        className={`${
          isMenuOpen ? 'max-h-[300px]' : 'max-h-0'
        } overflow-hidden transition-all duration-500 ease-in-out absolute top-[80px] left-0 w-full  bg-[#E5E5E5] xl:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Мировая история</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">История Кыргызстана</li>
          <li className="hover:text-[20px] transition-all duration-300 ease-in-out">Олимпиадная история</li>
          <li onClick={handleAboutClick} className="hover:text-[20px] transition-all duration-300 ease-in-out">О нас</li>
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
      <button onClick={handleLoginClick} className="hidden xl:block text-white bg-[#333335] rounded-[45px] text-2xl px-[27px] py-[4px] hover:cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out">Войти</button>
    </header>
  );
};

export default Header;
