import React from 'react'
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  let ingredientList = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        {key.charAt(0).toUpperCase()}{key.substr(1)} x {props.ingredients[key]}
      </li>
    )
  });

  return (
    <React.Fragment>
      <span style={ {display: 'flex', alignItems: 'center', flexDirection: 'column'} }>
        <h3>Your Order</h3>
        <p style={ {margin: '0'} }>Your delicious burger is ready to order:</p>
        <ul>
          {ingredientList}
        </ul>
        <strong>Price: £{props.price}</strong>
      </span>
      <div style={ {display: 'flex', justifyContent: 'space-between', marginTop: '2em'} }>
        <Button click={props.amendOrder} classModifier={'Bad'}>Amend order</Button>
        <Button click={props.test} classModifier={'Good'}>Pay £{props.price}</Button>
      </div>
    </React.Fragment>
  )
}

export default OrderSummary;
