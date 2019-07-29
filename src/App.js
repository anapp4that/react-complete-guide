import React from 'react';
import Layout from '../src/components/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import BuildControls from '../src/components/Burger/BuildControls/BuildControls'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
