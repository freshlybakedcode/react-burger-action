import React from 'react'
import Button from '../UI/Button/Button';
import classes from './Toolbar.css';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Button click={props.menuClickHandler}>MENU</Button>
      <div>James' burger maker</div>
      <nav>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </nav>
    </header>
  )
}

export default Toolbar
 