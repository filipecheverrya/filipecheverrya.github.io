import { ThemeProvider } from 'styled-components';
import { light, dark } from '../assets/themes';
import I18n from '../lib/i18n';
import GlobalStyle from '../assets/global';

export default function MyApp({ Component, pageProps }) {
  // TODO: verify in localStorage for current theme
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <ThemeProvider theme={dark}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </I18n>
  )
}
