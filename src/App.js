import React from 'react';
import logo from './logo.svg';
import './App.css';
import IMG_0018 from './IMG_0018.jpg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={IMG_0018} className="App-logo" alt="logo" />
        <p>
          I Love Micah White 
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
