import { Link } from 'react-router-dom';
import plays from '../../data/plays.json';
import "./ContentsPage.css";

const ContentsPage = () => {
  return (
    <div className="contents-page">
      <div className="contents-container">
        <h1 className="contents-page__title">Пьесы</h1>
        
        <ul className="contents-list">
          {plays.map((play) => (
            <li key={play.id} className="contents-list__item">
              <Link to={`/plays/${play.slug}`} className="contents-list__link ">
                <span className="contents-list__label">{play.label}</span>
                <p className="contents-list__description">{play.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/" className="contents-page__back">На главную</Link>
    </div>
  );
};

export default ContentsPage;
