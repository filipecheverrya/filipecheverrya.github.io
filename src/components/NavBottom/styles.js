import styled from 'styled-components';
import { CurrentLine } from '../../assets/styles/colors';

export const Container = styled.nav`
  background-color: ${CurrentLine};
  padding: 0 16px;
  height: 67px;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
