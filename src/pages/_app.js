/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { SisuProvider } from '../contexts/SisuContenxt'
import Head from 'next/head'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SisuProvider>
          <Header />
          <NavBar />
          <Component {...pageProps} />
        </SisuProvider>
      </ThemeProvider>
    </>
  )
}
