import { useTheme } from '../../contexts/ThemeContext';
import "./ThemeToggle.css"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Используем хук
  
  const linkToIcon = theme === "light" ? "/night.svg" : "/day.svg";
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? 'НОЧЬ' : 'ДЕНЬ'}
      <img src={linkToIcon} alt="Иконка для переключения темы"/>
    </button>
  );
};

export default ThemeToggle;

