import Head from 'next/head';
import useI18n from '../../hooks/use-i18n';
import { languages, contentLanguageMap } from '../../lib/i18n';

import Header from '@components/Header';

import { Body } from '@assets/utils';

const Home = () => {
  const i18n = useI18n();
  const { t } = i18n;

  return (
    <div>
      <Head>
        <meta httpEquiv="content-language" content={contentLanguageMap[i18n.activeLocale]} />
        <title>Filipe Echeverrya</title>
      </Head>
      <Header />
      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat ducimus officiis quisquam ut recusandae iste soluta suscipit 
          eius amet, obcaecati excepturi quo nam?
        </p>
      </Body>
    </div>
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
