//React Imports
import React from 'react';
//Component Imports
import Item from './Item/Item';
//Style Imports
import classes from './Items.module.css';

const Items = (props) => (
    <ul className={classes.Items}>
        <Item link="/" active>
            Burger Builder
        </Item>
        <Item link="/">
            Checkout
        </Item>
    </ul>
);

export default Items;