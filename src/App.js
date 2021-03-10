import logo from './logo.svg';
import './App.css';
import './Box.js';
import Box from './Box';

function App() {
  const elements = ['one', 'two', 'three', 'four'];
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        
  
    <ul style={{}}>
      
      {elements.map((value, index) => {
        return <Box key={index} value={value}></Box>
      })}
      
    
    </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
