import React from 'react'
import { Link, Route } from 'react-router-dom'
import HomeBased from "./Channel/HomeBased.js"
import Home from "./Channel/Home.js"
import About from "./Channel/About.js"
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className ="links">
            <Link to="/">YouTube</Link>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </header>
        <div className='homebased'>
            <Route exact path="/" component={HomeBased}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
      </header>
       
    </div>
  );
}

export default App;
