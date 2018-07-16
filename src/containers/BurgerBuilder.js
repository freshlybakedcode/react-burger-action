import React, { Component } from 'react'
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
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
    price: 0
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
      newPrice = newPrice + (newIngredients[key] * INGREDIENT_PRICES[key]);
    }
    this.setState({
      ingredients: newIngredients,
      price: newPrice
    })
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
        <Burger ingredients={this.state.ingredients} />
        <p>Current price: {this.state.price}</p>
        <BuildControls 
          disabled={disabledInfo}
          updateIngredientsHandler={this.updateIngredientsHandler} 
        />
      </React.Fragment>
    )
  }
}
