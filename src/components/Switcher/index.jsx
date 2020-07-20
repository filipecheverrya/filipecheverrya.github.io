import React, { useState } from 'react';

import IconSun from '@assets/icons/sun';
import IconMoon from '@assets/icons/moon';
import IconFlag from '@assets/icons/flag';

import {
  Container,
  IconWrapper,
  ContainerIconSwitcher,
  Circle,
  Background
} from './styles';

function Switcher({ theme }) {
  const [switchStatus, setSwitchStatus] = useState(false);

  function switcher() {
    return (
      <ContainerIconSwitcher>
        <Circle className={[switchStatus ? 'active' : '']} />
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
            {switcher()}
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
            {switcher()}
            <IconWrapper size="large">
              <IconFlag />
            </IconWrapper>
          </>
        );
    }
  }
  
  return (
    <Container
      onClick={() => setSwitchStatus(!switchStatus)}
      id={`switcher-${theme}`}
    >
      {renderSwitcher()}
    </Container>
  );
}

export default Switcher;