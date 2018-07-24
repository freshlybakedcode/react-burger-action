import React from 'react'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar menuClickHandler={props.menuClickHandler} />
      <SideDrawer />
      <main className={ classes.content }>
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default Layout;
