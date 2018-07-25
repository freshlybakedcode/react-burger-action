import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavigationItems}>
        <NavigationItem
          href={'/'}
          text={'Burger Builder'}
          active={true}
        />
        <NavigationItem
          href={'/'}
          text={'Checkout'}
        />
      </ul>
    </nav>
  )
}

export default NavigationItems
