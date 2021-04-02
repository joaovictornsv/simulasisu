import React, { useContext } from 'react'
import { SisuContext } from '../../contexts/SisuContenxt'
import HeaderBase from './styles'
import HeaderImage from '../../assets/images/header_home.svg'
import SimpleMenu from '../MenuMobile'

const Header = () => {
  const { headerText } = useContext(SisuContext)

  return (
    <HeaderBase>
      <HeaderBase.Top>
        <span>LOGO</span>
        <SimpleMenu />
      </HeaderBase.Top>
      <HeaderBase.Content>

        <HeaderBase.Image src={HeaderImage} draggable={false}/>

        <HeaderBase.Title>
          { headerText}
        </HeaderBase.Title>

      </HeaderBase.Content>
    </HeaderBase>
  )
}

export default Header
