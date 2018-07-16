import React from 'react'
import classes from './BuildControl.css';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.ingredientLabel}</div>
      <button onClick={() => props.updateIngredientsHandler('remove', props.value)} disabled={props.disabled}>-</button>
      <button onClick={() => props.updateIngredientsHandler('add', props.value)}>+</button>
    </div>
  )
}

export default BuildControl
