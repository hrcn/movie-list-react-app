import React from 'react'
import { Link } from 'react-router-dom'
// styling
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../assets/images/logo.png'

const useStyles = makeStyles(theme => ({
  appbar: {
    background: '#00BFFF'
  },
  button: {
    margin: theme.spacing(2),
    '&:hover': {
      background: '#4682B4'
    }
  },
  logo: {
    width: '3rem'
  }
}))

function Nav() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <img className={classes.logo} src={logo} alt="logo" />
        <Button className={classes.button} component={Link} to="/" color="inherit" size="small">
          Home
        </Button>
        <Button className={classes.button} component={Link} to="/movielist" color="inherit" size="small">
          Movie List
        </Button>
        <Button className={classes.button} component={Link} to="/like" color="inherit" size="small">
          Liked Movies
        </Button>
        <Button className={classes.button} component={Link} to="/block" color="inherit" size="small">
          Blocked Movies
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
