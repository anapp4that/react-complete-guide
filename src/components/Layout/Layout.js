import React, { Fragment } from 'react'
import classes from './Layout.module.css'
//import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => (
    //<Aux>
    <Fragment>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
    //</Aux>
)

export default Layout