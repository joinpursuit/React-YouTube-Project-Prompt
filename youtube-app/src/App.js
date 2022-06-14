import './App.css';
import { React, useEffect } from "react";



export default function App() {
function getData () {
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
}


useEffect(() => {
  getData()
    .then(response => response.json())
    .then(response => console.log(response))
}, []) 

  
return (
    <div className="App">
      <header className="App-header">
        <p>
          
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

