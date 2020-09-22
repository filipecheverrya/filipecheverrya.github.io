import React, { useState, useCallback, useEffect, useContext } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import Title from '../Title';
import AppContext from '../../appContext';

import {
  Container, Wrapper, Box, Name, Description, Language, Small
} from './styles';

function Repositories() {
  const { state } = useContext(AppContext);

  const { t } = useTranslation('home');

  const formatDate = (date) => {
    const { language } = state;
    const formats = {
      pt: 'DD/MM/YYYY',
      en: 'MM/DD/YYYY'
    }
    
    return moment(date).format(formats[language]);
  }
  
  const [repos, setRepos] = useState([]);

  const orderByRecents = (reps = []) => {
    const ordered = reps.sort((a, b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    setRepos(ordered);
  }
  
  const getRepoData = useCallback(async () => {
    try {
      const response = await fetch('https://api.github.com/users/filipecheverrya/repos');
      orderByRecents(await response.json());
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  return (
    <Container>
      <Title>{t('repositories.title')}</Title>
      <Wrapper>
        {repos?.map(
          ({id, language, name, description, updated_at}) => (
            <Box key={id}>
              <Name>{name}</Name>
              <Language>{language}</Language>
              <Description>{description}</Description>
              <Small>
                {`${t('repositories.update')}: ${formatDate(updated_at)}`}
              </Small>
            </Box>
          )
        )}
      </Wrapper>
    </Container>
  );
}

export default Repositories;