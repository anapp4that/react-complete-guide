import React, { useEffect } from 'react'

import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    //this is run every time something happens with Cockpit
    //this one function can handle all the behaviors that
    //componentDidMount, shouldComponenetUpdate, componentDidUpdate
    //can handle

    //you can have multiple useEffects, each bound to their own property 
    //or many properties so when bound property changes it will trigger the loop again
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect')
    //     setTimeout(() => {
    //         alert('Saved data to cloud')
    //     }, 1000)
    // }, [props.persons])

    //If you need something to run the first time the component is rendered
    //and you dont havea dependency on a certain field then passing an 
    //empty array to the 3 argument of useEffect will make it only run once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000)
    }, [])


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
            <h1>{props.title}</h1>
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

export default Cockpit