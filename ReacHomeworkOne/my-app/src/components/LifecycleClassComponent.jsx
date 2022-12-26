import React, { Component } from 'react'

export default class LifecycleClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 8
        }

    }

    //HOMEWORK

    increment = () => {
        console.log("incremenet")
        this.setState((state) => ({ counter: state.counter + 10 }))
    }
    decrease = () => {
        console.log("incremenet")
        this.setState((state) => ({ counter: state.counter - 10 }))
    }
    increaseNew = () => {
        console.log("incremenet")
        this.setState((state) => ({ counter: state.counter = "VALUE"}))
    }
    
    render() {
        console.log("CLASS COMPONENT => RENDER")
        return (
            <div>Class Component
                <hr />
                counter : {this.state.counter}
                <br />
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.increaseNew}>NEW</button>
            </div>
        )
    }
}
