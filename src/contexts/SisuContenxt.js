import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SisuContext = createContext({})

export function SisuProvider ({ children }) {
  const msg = 'Bem-vindo ao SimulaSisu, bem-vindo ao SimulaSisu de novo'
  const [headerText, setHeaderText] = useState(msg)

  function changeText (text) {
    setHeaderText(text)
  }

  return (
    <SisuContext.Provider
      value={{
        headerText,
        changeText
      }}
    >
      {children}
    </SisuContext.Provider>
  )
}

SisuProvider.propTypes = {
  children: PropTypes.node.isRequired
}
