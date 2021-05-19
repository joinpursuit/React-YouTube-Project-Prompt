import Channel from "./Channel"
import {Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='http://cdn.onlinewebfonts.com/svg/img_24879.png' className="App-logo" alt="logo" />
        <h1>
          Welcome to my Channel.
        </h1>
        <Link to="/">VISIT</Link>
        
      </header>
      <Route path='/' component={Channel}/>
    </div>
  );
}

export default App;
