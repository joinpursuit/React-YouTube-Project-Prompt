import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./components/Home";
import VideoDisplay from "./components/VideoDisplay";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/video/:videoid" component={VideoDisplay} />
      </Switch>
    </div>
  );
}

export default App;
      