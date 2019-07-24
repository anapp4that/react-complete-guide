import React, { Component } from 'react'
import Person from './Person/Person'

//With ES6, if using the arrow function, you can omit
//the return in the function body whats in () after
//the => gets returned automatically
class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    //Removed
    //Technically still exist, but usage should be limited
    //will be removed eventually
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

    //Removed
    //Technically still exist, but usage should be limited
    //will be removed eventually
    // componentWillUpdate(){

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Perons.js componentWillUnmount');

    }

    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}
                        key={person.id}
                    />
                )
            })
        )
    }
}

export default Persons