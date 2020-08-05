import styled from 'styled-components';

import { CurrentLine } from '../../assets/styles/colors';

export const Container = styled.header`
  background-color: ${CurrentLine};
  position: sticky;
  top: 0;
  z-index: 1;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24),
    0px 0px 4px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    padding: 0 16px;
    justify-content: center;

    ul {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const LinkLanguage = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 48px;
  height: auto;
`;