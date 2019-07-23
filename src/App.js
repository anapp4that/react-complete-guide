import React, { Component } from 'react';

//import our CSS file so we can leverage classes to get css styles from it
import classes from './App.module.css';

import Person from './Person/Person';
//Get Rid of Radium if using CSS Modules
//import Radium, {StyleRoot} from 'radium';

//Class Implementation
class App extends Component {
  state = {
    persons: [
      { id: 'asd6asd', name: "Shelby", age: 24 },
      { id: '6v5s1m6', name: "Kosma", age: 24 },
      { id: 'jh6k5bs', name: "Will", age: 24 }
    ],
    personsShowing: false,
    buttonText: "Show People"
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

    person.name = event.target.value;

    //... is the spread operator
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersons = () => {
    const shown = !(this.state.personsShowing)

    let newButtonText
    if(shown){
      newButtonText = "Hide People"
    }
    else{
      newButtonText = "Show People"
    }

    this.setState({
      personsShowing: shown,
      buttonText: newButtonText
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    //remove if using CSS modules instead of Radium
    //"inline" styling
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    //dynamically render the people in the list, if the button is toggeled to show
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

      //remove this if not using radium
      // buttonStyle.backgroundColor = 'red';
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    //create a list to contain html classes
    let htmlClasses = []
    //check if we want to add a class to the list
    if(this.state.persons.length <= 2){
      htmlClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      htmlClasses.push(classes.bold)
    }

    //when passing htmlClasses to our classname, we need to make sure to join them with a space
    return (
      //wrap the app in a style root so Radium can parse the media query in the Persons.js file
      //<StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I am a React App</h1>
          <p className={htmlClasses.join(' ')}>This is really working!</p>
          <button
            style={buttonStyle}
            onClick={this.togglePersons}
          >
            {this.state.buttonText}
          </button>
          {persons}
        </div>
      //we dont need the style root if using CSS modules
      //</StyleRoot>
    );

    //the line below is what the HTMl looking language above gets rendered down too
    //return React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'I am a React App!!'))
  }
}

//Have to wrap out component to get the benifit of pseudo selectors and media queries
//export default Radium(App);

//Get Rid of Radium if using CSS Modules
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
