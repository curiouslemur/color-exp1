import './App.css';
import Button from '@mui/material/Button';
import * as dao from './_utils/firebase-config'

const onClick = () => {
  let doc = {
    key1: "aaa",
    key2: "bbb"
  }
  dao.logFs("userId1", doc, "en", "exp1")
  // alert(JSON.stringify(doc))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onClick}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
