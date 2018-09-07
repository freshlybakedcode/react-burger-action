import React from 'react'
import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Button from '../../UI/Button/Button';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let revealSideDrawer = '-280px';
  if (props.sideDrawerOpen) {
    revealSideDrawer = '0px';
  }
  return (
    <React.Fragment>
      <Backdrop show={props.sideDrawerOpen} click={props.sideDrawerClose} />
      <div className={classes.SideDrawer} style={{left: revealSideDrawer}}>
        <Logo />
        <NavigationItems />
        <Button click={props.sideDrawerClose}>Close</Button>
      </div>
    </React.Fragment>
  )
}

export default SideDrawer
