import React, { useReducer, createContext } from 'react';
import { dark, light } from './assets/styles/theme';
import GlobalStyle from './assets/styles/global';
import { ThemeProvider } from 'styled-components';

const initialState = {
  theme: 'dark',
  language: 'pt',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme === 'dark' ? dark : light}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;