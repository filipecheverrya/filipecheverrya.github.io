import React, { useContext } from 'react';
import i18next from 'i18next';

import Switcher from '../Switchers';
import SocialLinks from '../SocialLinks';
import AppContext from '../../appContext';

import { Container, Wrapper } from './styles';

function Header() {
  const { state, dispatch } = useContext(AppContext);
  const { theme, language } = state;

  function onChangeLanguage() {
    const response = language === 'pt' ? 'en' : 'pt';
    
    i18next.changeLanguage(response);

    dispatch({
      type: "SET_LANGUAGE",
      language: response,
    });
  }
  
  function onChangeTheme() {
    const response = theme === 'dark' ? 'light' : 'dark';
    dispatch({
      type: "SET_THEME",
      theme: response,
    });
  }

  return (
    <Container>
      <SocialLinks />
      <Wrapper>
        <Switcher
          type="color-theme"
          value={theme}
          onClick={onChangeTheme}
        />
        <Switcher
          type="language"
          value={language}
          onClick={onChangeLanguage}
        />
      </Wrapper>
    </Container>
  );
}

export default Header;