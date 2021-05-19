import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar/>
         <main>
           <Switch>
             <Route exact path ="/"><h1>Youtube: Pick a video!</h1></Route>
           </Switch>
                
         </main>
                
    </div>
  );
}

export default App;
