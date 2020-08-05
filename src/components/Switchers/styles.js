import styled, { css } from 'styled-components';
import { BackgroundLight } from '../../assets/styles/colors';

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Slider = styled.div`
  position: relative;
  height: 14px;
  width: 40px;
  background-color: rgba(255, 255, 255, .26);
  border-radius: 8px;
  margin: 0 16px;
  
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background-color: ${BackgroundLight};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
      0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: left .2s;
    
    ${props => (props.active === 'light' || props.active === 'en') && css`
      left: 20px
    `}
  }

`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
