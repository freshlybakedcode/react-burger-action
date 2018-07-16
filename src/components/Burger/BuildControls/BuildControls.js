import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { ingredientLabel: 'Salad', type: 'salad' },
  { ingredientLabel: 'Bacon', type: 'bacon' },
  { ingredientLabel: 'Cheese', type: 'cheese' },
  { ingredientLabel: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.type} 
          value={ctrl.type}
          disabled={props.disabled[ctrl.type]}
          ingredientLabel={ctrl.ingredientLabel} 
          updateIngredientsHandler={props.updateIngredientsHandler}
        />
      ))}
    </div>
  )
}

export default BuildControls
