import styled from 'styled-components';
import { greaterThanPhone } from '@assets/medias';
import { CurrentLine } from '@assets/colors';

export const Container = styled.div`
  background-color: ${CurrentLine};
  position: sticky;
  bottom: 0;
  z-index: 1;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;

  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.24),
    0px 0px 4px rgba(0, 0, 0, 0.12);

  @media ${greaterThanPhone} {
    display: none;
  }
`;
