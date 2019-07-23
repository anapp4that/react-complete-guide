import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersons = () => {
    const shown = !(this.state.personsShowing)

    this.setState({
      personsShowing: shown
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null

    if (this.state.personsShowing) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}
            />

          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button
          style={buttonStyle}
          onClick={this.togglePersons}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'I am a React App!!'))
  }
}

export default App;

//Function Implementation
// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: "Shelby",
//         age: 24
//       },
//       {
//         name: "Kosma",
//         age: 24
//       },
//       {
//         name: "Will",
//         age: 24
//       }
//     ],
//   })
//   const [otherState, setOtherState] = useState("otherState")

//   console.log(personsState, otherState)

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Will", age: 24 },
//         { name: "Shelby", age: 24 },
//         { name: "Kosma", age: 24 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
//   //return React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'I am a React App!!'))
// }
