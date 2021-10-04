import { useState } from 'react';
import Input from './components/Input'

function App() {
  console.log('render component');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeLogin(event) {
    setLogin(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      {/* <div>
        <label htmlFor="login">Login: </label>
        <input name="login" onChange={handleChangeLogin} />
      </div> */}
      <Input handleChange={handleChangeLogin} name="name"/>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          onChange={handleChangePassword}
        />
      </div>
      <div>{login}</div>
    </>
  );
}
export default App;
