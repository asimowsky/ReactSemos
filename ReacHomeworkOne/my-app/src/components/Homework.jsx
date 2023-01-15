import React from 'react'
import { useState } from 'react';



const Homework = () => {

    const [value, setValue] = useState(0);
    const [incrementValue, setIncrementValue] = useState(0);

    const decrementValue = () => {
        setValue(value - 1);
    };

    const increment = () => {
        setValue(value + Number(incrementValue));
      };

    return (
        <div>
            <p>Value: {value}</p>
            <button onClick={decrementValue}>Decrement</button>
            <div>
               
                <input type="number" onChange={(e) => setIncrementValue(e.target.value)} />
                <button onClick={increment}>Increment</button>
            </div>
        </div>

    );
}

export default Homework