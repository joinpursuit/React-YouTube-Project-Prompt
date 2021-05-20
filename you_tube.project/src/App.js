import './App.css';
import {Route, Link } from 'react-router-dom'
import HomeBased from "./Channel/HomeBased.js"
import React from 'react'
import './App.css'


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src='http://cdn.onlinewebfonts.com/svg/img_24879.png' className="App-logo" alt="logo" />
        <h1>
          Welcome to my Channel.
        </h1>
        <nav>
          <Link to="/">Visit me</Link>
        </nav>
        <div>
          <Route path="/" component={HomeBased}/>
        </div>
      </header>
          </div>
  );
}

export default App;
