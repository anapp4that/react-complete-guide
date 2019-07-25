import React, { Component, Fragment } from 'react'
//import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

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
                <div>Build Controls</div>
            </Fragment>
            //</Aux>
        )
    }
}

export default BurgerBuilder