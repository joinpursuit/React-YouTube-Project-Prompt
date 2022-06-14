import './App.css';
import React from "react";
import useFetch from 'react-fetch-hook';

export default function App() {

  const { isLoading, error, data } = useFetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`);
  if (isLoading) return "Loading..." ;
  if (error) return "Error"


  const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [abort, setAbort] = React.useState(() => {});
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const abortController = new AbortController();
          const signal = abortController.signal;
          setAbort(abortController.abort);
          const res = await fetch(url, {...options, signal});
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
      return () => {
        abort();
      }
    }, []);
  
    return { response, error, abort };
  };

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

