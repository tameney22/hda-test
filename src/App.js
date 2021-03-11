// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import DigitalEdition from './pages/DigitalEdition';
import Navigation from './components/Navigation'
import TestPage from './pages/TestPage';

function App() {
  return (<Router>
    <div className="App">
      <Navigation />
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/editions/b" component={DigitalEdition} />
          <Route path="/test2" component={TestPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
      {/* footer */}
    </div>
  </Router>);
}

export default App;
