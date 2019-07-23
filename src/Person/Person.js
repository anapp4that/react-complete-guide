import React from 'react';
import classes from './Person.module.css'

//Get Rid of Radium if using CSS Modules
//import Radium, {StyleRoot} from 'radium';


const person = (props) => {

    //remove inline style if using CSS module
    // const style={
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {props.children != null &&
                <p>{props.children}</p>
            }
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    );
}

//export default Radium(person);

//Get Rid of Radium wrapper if using CSS Modules
export default person