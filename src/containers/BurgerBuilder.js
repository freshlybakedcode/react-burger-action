import React, { Component } from 'react'
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  basePrice: 1.25,
  salad: 0.25,
  bacon: 0.75,
  cheese: 0.5,
  meat: 1.75
}
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 0,
    purchasable: false
  }

  componentDidMount() {
    this.setState({ // Set the base price
      price: INGREDIENT_PRICES.basePrice
    })
  }
  
  updatePurchaseState(newIngredients) { // can the burger be purchased?
    const purchasable = Object.keys(newIngredients).map(ingKey => {
      return newIngredients[ingKey]}).reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable
    });
  }

  updateIngredientsHandler = (action, ingredient) => {
    console.log(action, ingredient);
    const newIngredients = {...this.state.ingredients};
    let newPrice = 0;
    if (action === 'add') {
      newIngredients[ingredient]++;
    } else if (action === 'remove') {
      if (newIngredients[ingredient] > 0) {
        newIngredients[ingredient]--;
      }
    }
    for (let key in newIngredients) {
      newPrice = (newPrice + newIngredients[key] * INGREDIENT_PRICES[key]);
    }
    newPrice += INGREDIENT_PRICES.basePrice; // add in the base price of bun etc
    newPrice = newPrice.toFixed(2); // Format as currency
    this.setState({
      ingredients: newIngredients,
      price: newPrice
    })
    this.updatePurchaseState(newIngredients);
  }
  
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;  // Set each item to true/false
    }
    return (
      <React.Fragment>
        <Modal >
          <OrderSummary 
            ingredients={this.state.ingredients} 
            price={this.state.price}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <p>Current price: <strong>£{this.state.price}</strong></p>
        <BuildControls 
          disabled={disabledInfo}
          updateIngredientsHandler={this.updateIngredientsHandler}
          purchasable={this.state.purchasable}
        />
      </React.Fragment>
    )
  }
}
