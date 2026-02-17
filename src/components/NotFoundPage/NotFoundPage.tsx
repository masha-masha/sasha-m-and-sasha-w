import "./NotFoundPage.css"
import { Link } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext";

const NotFoundPage = () => {

  const { theme } = useTheme(); 

  const WomanIcon = theme === 'dark' ? "/woman_dark-theme.svg": "/woman.svg";
  const ManIcon = theme === 'dark' ? "/man_dark_theme.svg": "/man.svg";

  return (
    <section className="not-found-page">
      <div className="container not-found-content">
        <h1 className="not-found__title">404</h1>
        <div className="not-found__women-item">
          <img src={WomanIcon} alt="Изображение женщины"/>
          <p>Кажется, этой страницы не существует!</p>
        </div>
        <div className="not-found__man-item">
           <p>Но когда-нибудь мы ее обязательно изобретем.</p>
           <img src={ManIcon} alt="Изображение мужчины"/>
        </div>
         <Link to="/" className="not-found__btn">На главную</Link>
      </div>
      
    </section>
  )
}

export default NotFoundPage