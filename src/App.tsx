import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./components/HomePage/HomePage";
import ContentsPage from "./components/ContentsPage/ContentsPage";
import PlayPage from "./components/PlayPage/PlayPage";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
 return (
  <BrowserRouter>
   <ThemeProvider>
    <header className="header">
     <ThemeToggle />
    </header>
    <ScrollToTop />
    <div>
     <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/contents" element={<ContentsPage />} />

      <Route path="/plays/:slug" element={<PlayPage />} />

      <Route path="*" element={<div>Страница не найдена</div>} />
     </Routes>
     <footer className="home-footer">
      <div className="home-footer__content">
       <p>
        <Link to="/">© Мелкобуржуазные похождения Саши(м) и Саши(ж)</Link>
       </p>
       <div className="home-footer__links">
        <a href="#" className="home-footer__link">
         Автор: Маша.Б
        </a>
       </div>
      </div>
     </footer>
    </div>
   </ThemeProvider>
  </BrowserRouter>
 );
}

export default App;
