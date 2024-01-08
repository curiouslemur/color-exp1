import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Here starts the app. The secret is: <br />
        <b>{process.env.REACT_APP_TEST_SECRET}</b>
      </header>
    </div>
  );
}

export default App;
