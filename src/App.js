import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <p>passed to Layout from App</p>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
