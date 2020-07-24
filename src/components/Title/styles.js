import styled from 'styled-components';
import { Green } from '@assets/colors';
import { tablet } from '@assets/medias';

export const Container = styled.h2`
  font-size: 60px;
  font-weight: 300;
  position: relative;
  text-align: center;
  margin: 80px auto 72px;

  &:after {
    content: '';
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 72px;
    height: 4px;
    background-color: ${({ theme }) => theme.titleDash};;
  }

  @media ${tablet} {
    font-size: 48px;

    &:after {
      bottom: -16px;
      width: 40px;
    }
  }
`;

