import React from 'react'

import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'


const BuildControls = (props) => {

    return (
        <div>
            <BuildControl label='Meat'></BuildControl>
        </div>
    )
}

export default BuildControls