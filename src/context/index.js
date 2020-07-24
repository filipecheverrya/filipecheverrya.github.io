import React, { useReducer, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '@assets/themes';

const initialState = {
  theme: 'dark',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET_COLOR':
      return {
        ...state,
        theme: action.theme,
      };

    case 'CLEAR_ALL':
      return {};

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
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;