import React from 'react';
import { useTranslation } from 'react-i18next';

import adonis from '../../assets/images/adonis.png';
import cordova from '../../assets/images/cordova.png';
import jquery from '../../assets/images/jquery.png';
import mongodb from '../../assets/images/mongodb.png';
// import mysql from '../../assets/images/mysql.png';
import node from '../../assets/images/node.png';
import pug from '../../assets/images/pug.png';
import react from '../../assets/images/react.png';
import sass from '../../assets/images/sass.png';
import ecmascript from '../../assets/images/ecmascript.png';
import styledComponents from '../../assets/images/styled-components.png';
import typescript from '../../assets/images/typescript.png';
import vue from '../../assets/images/vue.png';
import yarn from '../../assets/images/yarn.png';
import figma from '../../assets/images/figma.png';
import nextjs from '../../assets/images/nextjs.png';
import nuxtjs from '../../assets/images/nuxtjs.png';
import firebase from '../../assets/images/firebase.png';

import blueshift from '../../assets/images/blueshift.png';
import melhorEnvio from '../../assets/images/melhor-envio.png';
import nodo from '../../assets/images/nodo.png';

import Title from '../Title';

import { Wrapper } from '../../assets/styles/helpers';
import { Container, StackGrid } from './styles';

function Experience() {
  const { t } = useTranslation('home');
  
  const expArr = [
    { src: adonis, alt: 'Adonis' },
    { src: cordova, alt: 'Cordova' },
    { src: jquery, alt: 'jQuery' },
    { src: mongodb, alt: 'Mongodb' },
    // { src: mysql, alt: 'MySql' },
    { src: node, alt: 'Node' },
    { src: pug, alt: 'Pug' },
    { src: react, alt: 'React' },
    { src: sass, alt: 'Sass' },
    { src: ecmascript, alt: 'EcmaScript' },
    { src: styledComponents, alt: 'Styled Components' },
    { src: typescript, alt: 'TypeScript' },
    { src: vue, alt: 'Vue' },
    { src: yarn, alt: 'Yarn' },
    { src: figma, alt: 'Figma' },
    { src: nextjs, alt: 'NextJS' },
    { src: nuxtjs, alt: 'NuxtJS' },
    { src: firebase, alt: 'Firebase' },
  ];
  
  const workArr = [
    { src: blueshift, alt: 'Blueshift' },
    { src: melhorEnvio, alt: 'Melhor Envio' },
    { src: nodo, alt: 'Nodo' },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>{t('experience.title')}</Title>
        <StackGrid>
          {expArr.length && expArr.map(img => (
            <img src={img.src} alt={img.alt} key={img.alt} />
          ))}
        </StackGrid>
      </Wrapper>
      <Wrapper>
        <Title>{t('career.title')}</Title>
        <StackGrid center>
          {workArr.length && workArr.map(img => (
            <img src={img.src} alt={img.alt} key={img.alt} />
          ))}
        </StackGrid>
      </Wrapper>
    </Container>
  );
}

export default Experience;