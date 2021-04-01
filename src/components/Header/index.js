import React, { useContext } from 'react'
import { SisuContext } from '../../contexts/SisuContenxt'
import { HeaderBase } from './styles'

const Header = () => {
  const { headerText } = useContext(SisuContext)

  return (
    <HeaderBase>
      { headerText }
    </HeaderBase>
  )
}

export default Header
