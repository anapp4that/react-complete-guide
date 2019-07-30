import React from 'react';

import Ingredient from './Ingredient/Ingredient';

import classes from './Burger.module.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <Ingredient key={ingredientKey + index} type={ingredientKey} />
            })
        }).reduce((array, element) => {
            return array.concat(element)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Add some ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
}

export default Burger;