import React from 'react';

import IconSun from '@assets/icons/sun';
import IconMoon from '@assets/icons/moon';
import IconFlag from '@assets/icons/flag';

import { Container, IconWrapper, ContainerIconSwitcher, Circle, Background } from './styles';

function Switcher({ theme, value, onClick }) {
  function switcherIcon() {
    return (
      <ContainerIconSwitcher>
        <Circle className={[value ? 'active' : '']} />
        <Background />
      </ContainerIconSwitcher>
    );
  }

  function renderSwitcher() {
    switch (theme) {
      case 'color':
        return (
          <>
            <IconWrapper size="small">
              <IconMoon color="white" />
            </IconWrapper>
            {switcherIcon()}
            <IconWrapper>
              <IconSun color="white" />
            </IconWrapper>
          </>
        );
    
      default:
        return (
          <>
            <IconWrapper size="large">
              <IconFlag country="brasil" />
            </IconWrapper>
            {switcherIcon()}
            <IconWrapper size="large">
              <IconFlag />
            </IconWrapper>
          </>
        );
    }
  }
  
  return (
    <Container onClick={onClick} id={`switcher-${theme}`}>
      {renderSwitcher()}
    </Container>
  );
}

export default Switcher;