import styled from 'styled-components';
import { Pink } from '../../assets/styles/colors';

export const Container = styled.div`
  width: fit-content;
  display: block;
  margin: 0 auto 32px;
  font-size: 48px;
  position: relative;

  &:after {
    content: '';
    display: block;
    height: 6px;
    width: 64px;
    background-color: ${Pink};
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
