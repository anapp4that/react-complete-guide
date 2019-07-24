import React, { useEffect } from 'react'

import classes from './Cockpit.module.css'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        const timer = setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
        return () => {
            console.log('[Cockpit.js] cleanUp')
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanUp in 2nd useEffect')
        }
    })




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