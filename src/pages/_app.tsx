import Head from 'next/head';

import type { AppProps } from 'next/app'

import { globalStyles } from 'theme';
import { Header } from 'components/header'


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Mercado Livre Brasil</title>
        <meta name="description" content="Fundada em 1999, MercadoLivre é uma companhia de tecnologia líder em comércio eletrônico na América Latina." />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
