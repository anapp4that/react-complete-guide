import React from 'react';

import Logo from '../../Logo/Logo'
import Items from '../Items/Items'

import classes from './SideDrawer.module.css'


const SideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <Items />
            </nav>
        </div>
    );
}

export default SideDrawer;