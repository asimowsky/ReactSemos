import React from 'react'
import { useEffect, useState } from "react"

const CallJson = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        // not with every rerender
        console.log("like a componetDidMount")
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => setTodos(json))

        return () => {
            console.log("like a componentWillUnmount")
        }
    },[])

    const ifFalse = todos.filter(todo => todo.completed === false);
    const ifTrue = todos.filter(todo => todo.completed === true);

    return <div>
      
        
        <div>
            <br />
            {ifFalse.map(todo => (
                <p key={todo.id} style={{color:'red' }}>{todo.title}</p>
            ))}
            <br />
            {ifTrue.map(todo=>(
                <p key={todo.id} style={{color:'green' ,textDecorationLine: 'line-through'}}>{todo.title}</p>
            ))}
        </div>
    </div>

}
export default CallJson