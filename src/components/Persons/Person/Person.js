import React, { Component } from 'react'
import classes from './Person.module.css'


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return [
            //if you dont technically need a div from an html
            //or css point of view you don't technically have to use
            //a wrapping div
            //< div className={classes.Person} >
            <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
            <p key='i2'>{this.props.children}</p>,
            <input key='i3' type="text" onChange={this.props.changed} value={this.props.name} />
            //</div >

        ]
    }
}

export default Person