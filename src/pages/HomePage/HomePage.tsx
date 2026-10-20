import "./HomePage.css";

import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";



const HomePage = () => {

 const { theme } = useTheme(); 

  const WomanIcon = theme === 'dark' ? "/woman_dark-theme.svg": "/woman.svg";
  const ManIcon = theme === 'dark' ? "/man_dark_theme.svg": "/man.svg";

 return (
  <section className="home-page">
   <img
    src={WomanIcon}
    alt="Изображение женщины"
    className="home-page__side-image home-page__side-image--left"
    aria-hidden="true"
   />
   <div className="home-content">
    <h1 className="home__title">Мелкобуржуазные похождения Саши(м) и Саши(ж)</h1>
    <div className="home__description">
     <p>
      {" "}
      Или сборник из микро(в основном) и макро(очень редко) пьес, в которых два близких друга, <span> Саша(м)</span> и  <span>Саша(ж)</span>, что-то делают, о чем-то говорят, временами спасают мир, а временами просто пинают балду.{" "}
     </p>
     <p>
      Пьесы можно читать непоследовательно, тем не менее, в последовательном чтении есть смысл: так вы правильно будете знакомиться с персонажами.
     </p>
     <p>И чего же мы ждем? Погнали!</p>
    </div>
    <Link to="/contents" className="home__action">Читать</Link>
   </div>

    <img 
        src={ManIcon}
        alt="Изображение мужчины" 
        className="home-page__side-image home-page__side-image--right"
        aria-hidden="true" 
      />
  </section>
 );
};

export default HomePage;
