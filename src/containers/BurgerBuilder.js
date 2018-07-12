import React, { Component } from 'react'
import Burger from '../components/Burger/Burger';

export default class BurgerBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Burger images</div>
        <div>Build controls</div>
      </React.Fragment>
    )
  }
}
