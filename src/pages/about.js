import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { SisuContext } from '../contexts/SisuContenxt'

const screenData = {
  headerText: 'Página de Sobre'
}

export default function About () {
  const { headerText, changeText } = useContext(SisuContext)

  if (headerText !== screenData.headerText) {
    useEffect(() => {
      changeText(screenData.headerText)
    }, [])
  }

  return (
    <>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </>
  )
}
