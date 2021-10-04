import {useEffect, useState} from 'react'
import Input from './components/Input'
import Joke from './components/Joke'

function App() {
  const [counter, setCounter] = useState(0)
  const [anotherCounter, setAnotherCounter] = useState(0)
  console.log('render component');
  
  useEffect(() => {
    console.log('render component in the use effect when anotherCounter changed')
  }, [counter])
  
  
  return (
    <>
      
      {/* <Input  name="name" label="Login"/>
      <Input  name="password" type="password" label="Password"/>
      <div onClick={() => setCounter(counter + 1)}>Counter: {counter}</div>
      <div onClick={() => setAnotherCounter(anotherCounter + 1)}>Another Counter: {anotherCounter}</div> */}
      <Joke />
    </>
  );
}
export default App;
