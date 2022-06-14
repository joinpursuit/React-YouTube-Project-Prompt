import './App.css';
import React from "react";
import useFetch from 'react-fetch-hook';

export default function App() {

  const { isLoading, error, data } = useFetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`);
  if (isLoading) return "Loading..." ;
  if (error) return "Error"

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

