import React from 'react';

import Title from '@components/Title';

import { Container, StackGrid } from './styles';

function Experience({ title }) {
  return (
    <Container>
      <Title>{title.experience}</Title>
      <StackGrid>
        <img src="/images/adonis.png" alt="adonis" />
        <img src="/images/cordova.png" alt="cordova" />
        <img src="/images/jquery.png" alt="jquery" />
        <img src="/images/mongodb.png" alt="mongodb" />
        <img src="/images/mysql.png" alt="mysql" />
        <img src="/images/node.png" alt="node" />
        <img src="/images/pug.png" alt="pug" />
        <img src="/images/react.png" alt="react" />
        <img src="/images/sass.png" alt="sass" />
        <img src="/images/ecmascript.png" alt="ecmascript" />
        <img src="/images/styled-components.png" alt="styled-components" />
        <img src="/images/typescript.png" alt="typescript" />
        <img src="/images/vue.png" alt="vue" />
        <img src="/images/yarn.png" alt="yarn" />
      </StackGrid>
      <Title>{title.career}</Title>
      <StackGrid center>
        <img src="/images/blueshift.png" alt="blueshift" />
        <img src="/images/melhor-envio.png" alt="melhor-envio" />
        <img src="/images/nodo.png" alt="nodo" />
      </StackGrid>
    </Container>
  );
}

export default Experience;