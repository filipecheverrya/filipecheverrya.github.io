import React from 'react';

import useI18n from '@src/hooks/use-i18n'
import IconPDF from '@assets/icons/pdf';
import IconLinkedin from '@assets/icons/linkedin';
import IconEmail from '@assets/icons/email';

import Switcher from '@components/Switcher';

import { Container, IconWrapper, IconContainer, SwitcherContainer } from './styles';

function Header() {
  const i18n = useI18n();
  const { t: headerT } = i18n;

  return (
    <Container>
      <IconContainer>
        <IconWrapper
          href="/files/pt.pdf"
          title={headerT('header.titles.pdf')}
          download
        >
          <IconPDF color="white" />
        </IconWrapper>
        <IconWrapper
          href="https://www.linkedin.com/in/filipe-echeverrya-b3727a162"
          target="_blank"
          rel="noopener noreferrer"
          title={headerT('header.titles.linkedin')}
        >
          <IconLinkedin color="white" />
        </IconWrapper>
        <IconWrapper
          href="mailto:filipecheverrya@gmail.com"
          title={headerT('header.titles.email')}
        >
          <IconEmail color="white" />
        </IconWrapper>
      </IconContainer>
      <SwitcherContainer>
        <Switcher theme="color" />
        <Switcher theme="language" />
      </SwitcherContainer>
    </Container>
  );
}

export default Header;