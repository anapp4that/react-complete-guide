import React, { useEffect, useRef } from 'react'
import AuthContext from '../../context/auth-context'

import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // setTimeout(() => {
        //     alert('Saved data to cloud')
        // }, 1000)
        toggleButtonRef.current.click()
        return () => {
            console.log('[Cockpit.js] toggle persons')
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
    if (props.personsLength <= 2) {
        htmlClasses.push(classes.red)
    }
    if (props.personsLength <= 1) {
        htmlClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={htmlClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.togglePersons}
                ref={toggleButtonRef}
            >
                Toggle Persons
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login</button>}

            </AuthContext.Consumer>
        </div>
    )
}

export default React.memo(Cockpit)