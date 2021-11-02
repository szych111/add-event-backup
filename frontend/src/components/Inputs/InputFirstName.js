import React, { useReducer, useState } from 'react'
import './Input.css'

const inputReducer = (state, e) => {
    return {
      ...state,
      [e.name]: e.value
    }
   }

function InputLastName () {
    const [inputData, setInputData] = useReducer(inputReducer, {});
    
    const handleChange = e => {
        setInputData({
          name: e.target.name,
          value: e.target.value,
        });
      }
    
    return (
        <input className="input input--name" placeholder='first name' name="firstName" onChange={handleChange}/>
    )     
}

export default InputLastName