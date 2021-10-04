import React, {useState} from 'react'

export default function Input({handleChange, name, type, label}) {
    const [input, setInput] = useState('')
    console.log('render input ' , name, input )

 function handleChange(event) {
     setInput(event.target.value);
  }
    return (
        <div>
        <label htmlFor={name}>{label}: </label>
        <input  type={type} name={name} onChange={handleChange} />
        <div>state of component {name}: {input}</div>
      </div>
    )
}
