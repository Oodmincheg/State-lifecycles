import Input from './components/Input'

function App() {
  console.log('render component');
 
  return (
    <>
      
      <Input  name="name" label="Login"/>
      <Input  name="password" type="password" label="Password"/>
      
      
    </>
  );
}
export default App;
