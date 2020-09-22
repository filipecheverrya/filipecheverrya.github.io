import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  max-width: 800px;
  margin: 64px auto 0;

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 320px;
  }
`;

export const Box = styled.div`
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .45);
  border-radius: 4px;
  display: grid;

  ${({ theme }) => (css`
      background-color: ${theme.repositorie.body};
      color: ${theme.repositorie.text};
    `
  )};
`;

export const Name = styled.h2`
  margin: 0 0 8px 0;
  font-size: 22px;
`;

export const Language = styled.h4`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: ${({ theme }) => darken('.3', theme.text)};
`;

export const Description = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
`;

export const Small = styled.small`
  display: block;
  align-self: flex-end;
  color: ${({ theme }) => darken('.3', theme.repositorie.text)};
`;
