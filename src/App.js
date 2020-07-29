import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation('home');
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t('title')}
        </p>
        <button type="button" onClick={() => {
          i18next.changeLanguage('pt');
        }}>
          pt-br
        </button>
        <button type="button" onClick={() => {
          i18next.changeLanguage('en');
        }}>
          en-us
        </button>
      </header>
    </div>
  );
}

export default App;
