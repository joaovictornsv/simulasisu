/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { SisuProvider } from '../contexts/SisuContenxt'

export default function App ({ Component, pageProps }) {
  return (
    <>
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
