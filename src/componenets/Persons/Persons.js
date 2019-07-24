import React from 'react'
import Person from './Person/Person'

//With ES6, if using the arrow function, you can omit
//the return in the function body whats in () after
//the => gets returned automatically
const persons = (props) => (
    props.persons.map((person, index) => {
        return (
            <Person
                name={person.name}
                age={person.age}
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, person.id)}
                key={person.id}
            />
        )
    })
)

export default persons