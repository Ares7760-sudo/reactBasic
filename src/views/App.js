import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Game from './Tic-tac-toe/Game';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/job-list">
            <MyComponent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
