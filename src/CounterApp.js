import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState( value )

    const handleAdd = () =>{
        setCounter(
            counter+1
        )
    }
    const handleReset = () =>{
        setCounter(
            value
        )
    }
    const handleSubstract = () =>{
        setCounter(
            counter-1
        )
    }

    return ( 
        <div>
            <h1>CounterApp</h1>
            <p>{ counter }</p>
            <br />
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp