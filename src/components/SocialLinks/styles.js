import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin: 0 8px;
`;

export const Link = styled.a`
  max-height: 38px;
  max-width: 32px;
  width: 100%;
  height: auto;
  display: block;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
