import React, { Fragment } from 'react'
import classes from './Layout.module.css'
//import Aux from '../../hoc/Auxiliary'

const Layout = (props) => (
    //<Aux>
    <Fragment>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
    //</Aux>
)

export default Layout