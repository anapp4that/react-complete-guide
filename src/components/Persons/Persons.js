//extending pure component gives you a component that
//implements shouldComponentUpdate with a check of every 
//prop for that component
import React, { PureComponent } from 'react'
import Person from './Person/Person'

//With ES6, if using the arrow function, you can omit
//the return in the function body whats in () after
//the => gets returned automatically
class Persons extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     //if the persons prop doest change we dont rerender
    //     if (nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.click !== this.props.click) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

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