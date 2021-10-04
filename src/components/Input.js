import React from 'react'

export default function Input({handleChange, name}) {
    console.log('render input ' ,name )
    return (
        <div>
        <label htmlFor={name}>Login: </label>
        <input name={name} onChange={handleChange} />
      </div>
    )
}
