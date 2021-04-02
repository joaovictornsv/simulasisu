import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import ButtonMenuMobile from '../ButtonMenuMobile'

const useStyles = makeStyles(() => ({
  item: {
    padding: 0,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  list: {
    width: '80vw',
    outline: 'none'
  }
}))

export default function SimpleMenu () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()

  return (
    <div>
      <ButtonMenuMobile onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuList className={classes.list}>
          <MenuItem className={classes.item} onClick={handleClose}>Home</MenuItem>
          <MenuItem className={classes.item} onClick={handleClose}>Simular</MenuItem>
          <MenuItem className={classes.item} onClick={handleClose}>Calcular</MenuItem>
          <MenuItem className={classes.item} onClick={handleClose}>Sobre</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}
