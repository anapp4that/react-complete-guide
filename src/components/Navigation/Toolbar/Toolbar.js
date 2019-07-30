import React from 'react';

import Logo from '../../Logo/Logo';
import Items from '../Items/Items';

import classes from './Toolbar.module.css';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <Items />
        </nav>
    </header>
);

export default Toolbar;