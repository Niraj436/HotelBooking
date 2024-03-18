import React, { createContext, useState } from "react";
import "./mystyles.css";
import "./darkMode.css"

import MyRoutes from "./MyRoutes";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <MyRoutes />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
