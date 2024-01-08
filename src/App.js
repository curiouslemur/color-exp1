import './App.css';
import Button from '@mui/material/Button';


const onClick = () => {
  alert("hello " + process.env.REACT_APP_APIKEY)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Here starts the app. The secret is: <br />
        <b>{process.env.REACT_APP_TEST_SECRET}</b>
        <Button onClick={onClick}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
