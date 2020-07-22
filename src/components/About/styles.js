import styled from 'styled-components';
import { phone } from '@assets/medias';

export const Container = styled.div`
  max-width: 645px;
  margin: 0 auto 80px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: #fff;
  text-align: center;

  @media ${phone} {
    padding: 0 24px;
  }
`;

export const Image = styled.img`
  margin: 0 auto 24px;
  display: block;
`;
