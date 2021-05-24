import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar'
import About from './Components/About'
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <main>
        <Route exact path="/"><h1>Youtube App</h1></Route>
        <Route path="/about" component={About} />
      </main>
      
      
    </div>
  );
}

export default App;
