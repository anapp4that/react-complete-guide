import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'
//import our CSS file so we can leverage classes to get css styles from it
import classes from './App.module.css'


//Class Implementation
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'asd6asd', name: "Shelby", age: 24 },
      { id: '6v5s1m6', name: "Kosma", age: 24 },
      { id: 'jh6k5bs', name: "Will", age: 24 }
    ],
    personsShowing: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  //Most commonly used life cycle hooks
  //componentDidMount
  //shouldComponenetUpdate
  //componentDidUpdate

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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


    //Using this set state method guarantee you that you get
    //the previous version of the state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
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

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    console.log('[App.js] render')
    //dynamically render the people in the list, if the button is toggeled to show
    let persons = null


    if (this.state.personsShowing) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      )
    }



    //when passing htmlClasses to our classname, we need to make sure to join them with a space
    return (
      <Auxiliary>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated, login: this.loginHandler
          }}>
          {this.state.showCockpit &&
            <Cockpit
              title={this.props.appTitle}
              shown={this.state.personsShowing}
              personsLength={this.state.persons.length}
              togglePersons={this.togglePersons}
            />
          }
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    )
  }
}

export default withClass(App, classes.App);