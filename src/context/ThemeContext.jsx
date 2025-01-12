import { createContext, useReducer, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialState = {
    theme: true,
  };

  const themeReducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
      return {
        theme: state.theme ? false : true,
      };
    }
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
