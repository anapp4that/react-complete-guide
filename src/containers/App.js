import React, { Component } from 'react'
import Persons from '../componenets/Persons/Persons'
import Cockpit from '../componenets/Cockpit/Cockpit';
//import our CSS file so we can leverage classes to get css styles from it
import classes from './App.module.css'




//Class Implementation
class App extends Component {
  state = {
    persons: [
      { id: 'asd6asd', name: "Shelby", age: 24 },
      { id: '6v5s1m6', name: "Kosma", age: 24 },
      { id: 'jh6k5bs', name: "Will", age: 24 }
    ],
    personsShowing: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "Shelby", age: 24 },
        { name: "Kosma", age: 24 }
      ],
    })
  }

  nameChangedHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === key
    })

    //... is the spread operator
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    //... is the spread operator
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersons = () => {
    const shown = !(this.state.personsShowing)

    let newButtonText;
    if (shown) {
      newButtonText = "Hide People"
    }
    else {
      newButtonText = "Show People"
    }

    this.setState({
      personsShowing: shown,
      buttonText: newButtonText
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    //dynamically render the people in the list, if the button is toggeled to show
    let persons = null


    if (this.state.personsShowing) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }



    //when passing htmlClasses to our classname, we need to make sure to join them with a space
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          shown={this.state.shown}
          persons={this.state.persons}
          togglePersons={this.togglePersons}
        />
        {persons}
      </div>
    )
  }
}

export default App