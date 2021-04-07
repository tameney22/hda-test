/* eslint-disable react/jsx-no-comment-textnodes */
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './pages/HomePage';
import DigitalEdition from './pages/DigitalEdition/DigitalEdition';
import Navigation from './components/Navigation'
import Footer from './components/footer' //added footer from components
import Collaborators from './pages/About/Collaborators';
import Technical from './pages/About/Technical';
import Bibliography from './pages/About/Bibliography';
import error404 from './pages/error404';
import Search from './pages/Search/Search';
import Tocb from './pages/editions-toc/Tocb';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/editions-toc/:teiName" component={Tocb} />
            <Route exact path="/editions/:teiName" render={props => (<Redirect to={`/editions/${props.match.params.teiName}/1R`} />)} />
            <Route path="/editions/:teiName/:stone" component={DigitalEdition} />
            <Route path="/search" component={Search} />
            <Route path="/about/collaborators" component={Collaborators} />
            <Route path="/about/technical" component={Technical} />
            <Route path="/about/Bibliography" component={Bibliography} />

            //Add above this so that any unimplemented pages show 404 page
            <Route path="*" component={error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>);
}

export default App;
