import styled, { css } from 'styled-components';

export const Container = styled.div`
`;

export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  max-width: 845px;
  margin: 64px auto 0;
  
  img {
    box-shadow: -2px 2px 12px rgba(0, 0, 0, .45);
    border-radius: 50%;
    
    &:nth-child(13) {
      grid-column: 3;
    }
  }
  
  @media (max-width: 769px) {
    max-width: 460px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    img {
      width: 100%;
      
      &:nth-child(13) {
        grid-column: unset;
      }
    }
  }
  
  @media (max-width: 475px) {
    max-width: 320px;
    grid-row-gap: 48px;
  }
  
  ${props => (props.center && css`
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    max-width: 410px;
  `)}
`;