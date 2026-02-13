/* eslint-disable react-refresh/only-export-components */
import React, {
 createContext,
 useState,
 useEffect,
 useContext,
 ReactNode,
} from "react";

interface ThemeContextType {
 theme: string;
 toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
 undefined,
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
 children,
}) => {
 const [theme, setTheme] = useState(() => {
  const storedTheme = localStorage.getItem("theme");

  return (
   storedTheme ||
   (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light")
  );
 });

 useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);
 }, [theme]);

 const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
 };

 return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
   {children}
  </ThemeContext.Provider>
 );
};

export const useTheme = () => {
 const context = useContext(ThemeContext);
 if (context === undefined) {
  throw new Error("useTheme must be used within a ThemeProvider");
 }
 return context;
};
