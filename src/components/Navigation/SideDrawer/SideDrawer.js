import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import Items from "../Items/Items";
import Backdrop from "../../UI/Backdrop/Backdrop";

import classes from "./SideDrawer.module.css";

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Items />
                </nav>
            </div>
        </Fragment>
    );
};

export default SideDrawer;
