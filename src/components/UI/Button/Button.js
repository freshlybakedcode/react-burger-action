import React from 'react'
import classes from './Button.css'

const Button = (props) => {
  return (
    <div 
      className={[classes.Button, classes[props.classModifier]].join(' ')}
      onClick={props.click}
    >
      {props.children}
    </div>
  )
}

export default Button
