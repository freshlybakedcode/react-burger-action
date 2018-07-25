import React from 'react'
import Button from '../UI/Button/Button';
import classes from './Toolbar.css';
import Logo from '../Burger/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Button classModifier={classes.Button} click={props.menuClickHandler}>MENU</Button>
      <Logo />
      <NavigationItems />
    </header>
  )
}

export default Toolbar
 