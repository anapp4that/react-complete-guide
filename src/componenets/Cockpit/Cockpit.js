import React from 'react'

import classes from './Cockpit.module.css'

const cockpit = (props) => {
    //create a list to contain html classes
    let htmlClasses = [];
    let btnClass = ''

    if (props.shown) {
        btnClass = classes.Red
    }

    //check if we want to add a class to the list
    if (props.persons.length <= 2) {
        htmlClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        htmlClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React App</h1>
            <p className={htmlClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.togglePersons}
            >
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit