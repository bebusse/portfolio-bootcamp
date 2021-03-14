/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Bernardo Busse | Meu Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/icofont.min.css" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
