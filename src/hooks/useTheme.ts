import { useEffect, useState } from "react";

type Theme = "dark" | "light";

type useThemeReturn = [Theme, () => void];

export const useTheme = (initialTheme: Theme): useThemeReturn => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
