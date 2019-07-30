import React from 'react';

import Logo from '../../Logo/Logo'
import Items from '../Items/Items'

import classes from './SideDrawer.module.css'


const SideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <Items />
            </nav>
        </div>
    );
}

export default SideDrawer;