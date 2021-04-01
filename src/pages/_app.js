/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
