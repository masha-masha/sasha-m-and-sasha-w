import { useParams, Link } from "react-router-dom";
import plays from "../../data/plays.json";
import { DialogueLine } from "./DialogueLine";
import "./PlayPage.css";

const PlayPage = () => {
 const { slug } = useParams<{ slug: string }>();

 const currentIndex = plays.findIndex((c) => c.slug === slug);
 const play = plays[currentIndex];

 if (!play) return <div>Пьеса не найдена</div>;

 const hasPrev = currentIndex > 0;
 const hasNext = currentIndex < plays.length - 1;

 return (
  <main className="reader">
   <article className="reader__article">
    <header className="reader__header">
     <span className="reader__label">{play.label}</span>
     <h1 className="reader__title">{play.title}</h1>
    </header>

    <div className="reader__content">
     {play.comment && <div className="reader__comment">{play.comment}</div>}
     <div className="reader__characters">
      <h3>{play.characters.title}</h3>
      <ul>
       {play.characters.names.map((name, index) => (
        <li key={index}>{name}</li>
       ))}
      </ul>
     </div>
     <div className="reader__scene">{play.scene}</div>
     {play.acts.map((act) => (
      <div key={act.actNumber}>
       {act.dialogues.map((item, i) => (
        <DialogueLine replica={item} index={i} />
       ))}
      </div>
     ))}
    </div>

    <nav className="reader__nav">
     {hasPrev && (
      <Link
       to={`/plays/${plays[currentIndex - 1].slug}`}
       className="reader__btn"
      >
       ← Предыдущая
      </Link>
     )}

     <Link to="/contents" className="reader__btn reader__btn--main">
      К содержанию
     </Link>

     {hasNext && (
      <Link
       to={`/plays/${plays[currentIndex + 1].slug}`}
       className="reader__btn"
      >
       Следующая →
      </Link>
     )}
    </nav>
   </article>
  </main>
 );
};

export default PlayPage;
