import React from 'react'
import Button from './styles'
import { GrMenu } from 'react-icons/gr'
import PropTypes from 'prop-types'

const ButtonMenuMobile = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <GrMenu className="icon"/>
    </Button>
  )
}

export default ButtonMenuMobile

ButtonMenuMobile.propTypes = {
  onClick: PropTypes.function
}
