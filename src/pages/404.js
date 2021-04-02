import React from 'react'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <h4>Page 404</h4>
      <p>Está perdido? Volte a página principal clicando no botão abaixo</p>
      <Link href="/">Home</Link>
    </>
  )
}
