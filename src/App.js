import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }
  menuClickHandler = () => {
    this.setState({
      sideDrawerOpen: true
    })
  }
  sideDrawerCloseHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }
  render() {
    return (
      <Layout menuClickHandler={this.menuClickHandler} sideDrawerOpen={this.state.sideDrawerOpen} sideDrawerClose={this.sideDrawerCloseHandler}>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
