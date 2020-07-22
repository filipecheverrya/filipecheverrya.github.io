import React from 'react';
import Head from 'next/head';
import useI18n from '../../hooks/use-i18n';
import { languages, contentLanguageMap } from '../../lib/i18n';

import Header from '@components/Header';
import About from '@components/About';
import Experience from '@components/Experience';
import BottomNav from '@components/BottomNav';
import { CurrentLine } from '@assets/colors';

import { Body } from '@assets/utils';

const Home = () => {
  const i18n = useI18n();

  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content={contentLanguageMap[i18n.activeLocale]} />
        <meta name="theme-color" content={CurrentLine} />
        <title>Filipe Echeverrya</title>
      </Head>
      <Header />
      <Body>
        <Experience />
        <About />
        <BottomNav />
      </Body>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { default: lngDict = {} } = await import(
    `../../locales/${params.lng}.json`
  )

  return {
    props: { lng: params.lng, lngDict },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((l) => ({ params: { lng: l } })),
    fallback: false,
  }
}

export default Home
