import React from 'react';
import I18n from '../lib/i18n';
import GlobalStyle from '../assets/global';
import { AppProvider } from '@src/context';

function Home({ Component, pageProps }) {
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </I18n>
  )
}

export default Home;