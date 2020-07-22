import React from 'react';

import useI18n from '@src/hooks/use-i18n'
import IconPDF from '@assets/icons/pdf';
import IconLinkedin from '@assets/icons/linkedin';
import IconEmail from '@assets/icons/email';
import IconGithub from '@assets/icons/github';

import { Container } from './styles';

function SocialLinks() {
  const i18n = useI18n();
  const { t: headerT } = i18n;
  
  return (
    <>
      <Container
        href="/files/pt.pdf"
        title={headerT('header.titles.pdf')}
        download
      >
        <IconPDF color="white" />
      </Container>
      <Container
        href="https://www.linkedin.com/in/filipe-echeverrya-b3727a162"
        target="_blank"
        rel="noopener noreferrer"
        title={headerT('header.titles.linkedin')}
      >
        <IconLinkedin color="white" />
      </Container>
      <Container
        href="mailto:filipecheverrya@gmail.com"
        title={headerT('header.titles.email')}
      >
        <IconEmail color="white" />
      </Container>
      <Container
        href="https://github.com/fripley"
        target="_blank"
        rel="noopener noreferrer"
        title={headerT('header.titles.github')}
      >
        <IconGithub color="white" />
      </Container>
    </>
  );
}

export default SocialLinks;