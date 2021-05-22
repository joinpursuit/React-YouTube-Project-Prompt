import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/aboutPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import home from "./components/home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
