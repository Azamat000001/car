import React from "react";
import "./Car.css";
function Car (props){
    const inputClasses = ['input']

    if (props.name !== ''){
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }
    return(
        <div>
            <h3> Car name: {props.name}</h3>
            <p> Year: {props.year}</p>
            <input type="text" onChange={props.onChangeName} value = {props.name} className = {inputClasses.join('')}></input>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
    }

export default Car;