import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import Switcher from '@components/Switcher';
import SocialLinks from '@components/SocialLinks';
import IconFlag from '@assets/icons/flag';
import AppContext from '@src/context';

import { Container, IconContainer, SwitcherContainer, LinkLanguage } from './styles';

function Header() {
  const { state, dispatch } = useContext(AppContext);

  const router = useRouter();
  
  function handleSwitcher() {
    dispatch({
      type: 'SET_COLOR',
      theme: state.theme === 'dark' ? 'light' : 'dark',
    });
  }

  function clickFlag() {
    router.push(router.query.lng === 'pt' ? '/en' : '/pt');
  }

  return (
    <Container>
      <IconContainer>
        <SocialLinks />
      </IconContainer>
      <SwitcherContainer>
        <Switcher
          theme="color"
          value={state.theme === 'light'}
          onClick={handleSwitcher}
        />
        <LinkLanguage onClick={clickFlag}>
          <IconFlag country={router.query.lng === 'pt' ? 'eua' : 'brasil'} />
        </LinkLanguage>
      </SwitcherContainer>
    </Container>
  );
}

export default Header;