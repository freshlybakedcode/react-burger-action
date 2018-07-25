import React from 'react'
import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Button from '../../UI/Button/Button';
const SideDrawer = (props) => {
  let revealSideDrawer = '-280px';
  if (props.sideDrawerOpen) {
    revealSideDrawer = '0px';
  }
  return (
    <div className={classes.SideDrawer} style={{left: revealSideDrawer}}>
      <Logo />
      <NavigationItems />
      <Button click={props.sideDrawerClose}>Close</Button>
    </div>
  )
}

export default SideDrawer
