import React from 'react';

import Moon from '../../assets/images/moon.png';
import Sun from '../../assets/images/sun.png';
import Brasil from '../../assets/images/brasil.png';
import UnitedStates from '../../assets/images/eua.png';

import { Container, Image, Slider } from './styles';

function Switchers({ type, value, onClick }) {

  return (
    <Container onClick={onClick}>
      {type === 'color-theme' ? (
        <Image src={Moon} alt="moon" />
      ) : (
        <Image src={Brasil} alt="brasil" />
      )}
      
      <Slider active={value} />
      
      {type === 'color-theme' ? (
        <Image src={Sun} alt="sun" />
      ) : (
        <Image src={UnitedStates} alt="united-states" />
      )}
    </Container>
  );
}

export default Switchers;