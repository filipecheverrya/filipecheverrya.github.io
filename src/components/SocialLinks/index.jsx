import React from 'react';

import Linkedin from '../../assets/images/linkedin.png';
import Email from '../../assets/images/email.png';
import PDF from '../../assets/images/pdf.png';
import Curriculo from '../../assets/files/curriculo.pdf';

import { Container, Item, Link } from './styles';

function SocialLinks() {

  const listOfLinks = [
    { label: 'pdf', src: PDF, href: Curriculo },
    { label: 'email', src: Email, href: 'mailto:filipecheverrya@gmail.com' },
    { label: 'linkedin', src: Linkedin, href: 'https://www.linkedin.com/in/filipe-echeverrya-b3727a162' },
  ]

  return (
    <Container>
      {listOfLinks.map(link => (
        <Item key={link.label}>
          <Link
            title={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.src} alt={link.label} />
          </Link>
        </Item>
      ))}
    </Container>
  );
}

export default SocialLinks;