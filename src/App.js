import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends Component {
  menuClickHandler = () => {
    alert('[app.js] menuClickHandler');
  }
  render() {
    return (
      <Layout menuClickHandler={this.menuClickHandler}>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
