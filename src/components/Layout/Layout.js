import React, { Fragment } from 'react';
import classes from './Layout.module.css';
//import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    //<Aux>
    <Fragment>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
    //</Aux>
);

export default Layout;