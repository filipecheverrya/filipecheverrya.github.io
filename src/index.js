import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppProvider } from './appContext';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as serviceWorker from './serviceWorker';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

const en = require('./locales/en.json');
const pt = require('./locales/pt.json');

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: 'common',
    defaultNS: 'common',
    lowerCaseLng: true,
    nonExplicitWhitelist: true,
    debug: false,

    resources: {
      en,
      pt,
    },
    
    lng: "pt",
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
