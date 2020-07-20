import styled, { css } from 'styled-components';
import { CurrentLine } from '@assets/colors';

export const Container = styled.header`
  background-color: ${CurrentLine};
  position: sticky;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24),
    0px 0px 4px rgba(0, 0, 0, 0.12);
`;

export const IconWrapper = styled.a`
  max-width: 32px;
  margin-right: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;
