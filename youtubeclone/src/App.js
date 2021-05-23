import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./components/Home";
<<<<<<< HEAD
=======
import VideoDisplay from "./components/VideoDisplay";
>>>>>>> ed8ef2ff1a08c833720749ee4a689a9e0f18654e

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
