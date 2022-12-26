import React from 'react'
import { useState } from 'react';

const LifecycleFuncComponent = () => {
    // ARRAY DESTRUCTION
    const colors = ["green", "red"];
    const [g, r] = colors;
    // ------------------------------------------
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 10);
    }
    const decrease = () => {
        setCounter(counter - 10);
    }
    const reset = () => {
        setCounter(0)
    }

    const [color,setColor] = useState("brown")

    return (
        <div>
            counter : {counter}
            <br />
            <button onClick={increment}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Resett</button>
            <button onClick={()=> setColor("black")}>Set Color</button>
            <button onClick={()=> setColor("red")}>Set Color</button>
            <h1 style={{color:color}}>Text</h1>
        

            {/* VERSION 2 */}
        </div>
    )
}

export default LifecycleFuncComponent