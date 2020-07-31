import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;