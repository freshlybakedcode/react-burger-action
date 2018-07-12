import React from 'react'
import classes from './Layout.css';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={ classes.content }>
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default Layout;
