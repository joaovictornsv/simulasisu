import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SisuContext = createContext({})

export function SisuProvider ({ children }) {
  const [headerText, setHeaderText] = useState('Bem-vindo ao SimulaSisu')

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
