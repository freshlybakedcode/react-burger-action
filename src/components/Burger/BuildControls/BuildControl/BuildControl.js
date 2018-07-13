import React from 'react'
import classes from './BuildControl.css';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.ingredientLabel}</div>
      <button>-</button>
      <button>+</button>
    </div>
  )
}

export default BuildControl
