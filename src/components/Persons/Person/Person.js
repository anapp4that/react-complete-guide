import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.module.css'
import withClass from '../../../hoc/WithClass'

class Person extends Component {

    //if using the functional setup you dont need
    //to create the ref in a constructor
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Fragment>
                <p key='i1' onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                    </p>
                <p key='i2'>
                    {this.props.children}
                </p>
                <input
                    key='i3'
                    //either way you set up references
                    //ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)