import React, { useContext } from 'react'
import { SisuContext } from '../../contexts/SisuContenxt'
import { HeaderBase, HeaderTitle } from './styles'

const Header = () => {
  const { headerText } = useContext(SisuContext)

  return (
    <HeaderBase>
      <HeaderTitle>
        { headerText}
      </HeaderTitle>
    </HeaderBase>
  )
}

export default Header
