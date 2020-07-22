import React from 'react';

import Title from '@components/Title';

import { Container, StackGrid } from './styles';

function Experience() {
  return (
    <Container>
      <Title>Stack of experience</Title>
      <StackGrid>
        <img src="/images/adonis.png" />
        <img src="/images/cordova.png" />
        <img src="/images/jquery.png" />
        <img src="/images/mongodb.png" />
        <img src="/images/mysql.png" />
        <img src="/images/node.png" />
        <img src="/images/pug.png" />
        <img src="/images/react.png" />
        <img src="/images/sass.png" />
        <img src="/images/ecmascript.png" />
        <img src="/images/styled-components.png" />
        <img src="/images/typescript.png" />
        <img src="/images/vue.png" />
        <img src="/images/yarn.png" />
      </StackGrid>
      <Title>Career</Title>
      <StackGrid center>
        <img src="/images/blueshift.png" />
        <img src="/images/melhor-envio.png" />
        <img src="/images/nodo.png" />
      </StackGrid>
    </Container>
  );
}

export default Experience;