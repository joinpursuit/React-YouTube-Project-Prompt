import "./styles/App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import About from "./Components/About";
import { Route, Switch } from "react-router-dom";
import VideoCard from "./Components/VideoCard";


function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Switch>
          <Route exact path="/">
            <h1>Youtube App</h1>
            <SearchBar />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/video/:id" component={VideoCard} >
            <VideoCard />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
