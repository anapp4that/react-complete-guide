import React, { Component, Fragment } from 'react'
//import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            //<Aux>
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Fragment>
            //</Aux>
        )
    }
}

export default BurgerBuilder