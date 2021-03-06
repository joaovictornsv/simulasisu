import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { SisuContext } from '../contexts/SisuContenxt'

const screenData = {
  headerText: 'Bem-vindo ao SimulaSisu'
}

export default function Home () {
  const { headerText, changeText } = useContext(SisuContext)

  if (headerText !== screenData.headerText) {
    useEffect(() => {
      changeText(screenData.headerText)
    }, [])
  }

  return (
    <>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </>
  )
}
