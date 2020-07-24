import React from 'react';

import Title from '@components/Title';

import { Container, Paragraph, Image } from './styles';

function About({ title, resume }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src="/images/filipe.png" alt="Filipe Echeverrya" />
      {resume.map((row, i) => <Paragraph key={i}>{row}</Paragraph>)}
    </Container>
  );
}

export default About;