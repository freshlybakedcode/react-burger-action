import React from 'react'

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
      <h3>Your Order</h3>
      <p>Your delicious burger is ready to order:</p>
      <ul>
        {ingredientList}
      </ul>
      <strong>Price: £{props.price}</strong>
      <button>Continue?</button>
      <button>Amend order</button>
    </React.Fragment>
  )
}

export default OrderSummary;
