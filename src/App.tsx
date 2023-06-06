import React from 'react';
import logo from './logo.svg';
import PIOPIY from 'piopiyjs';
import './App.css';

function App () {

  var piopiy = new PIOPIY( {
    name: 'Display Name',
    debug: true,
    autoplay: true,
    ringTime: 60
  } );

  piopiy.login( 'user_id', 'password', 'sbcind.telecmi.com' );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
