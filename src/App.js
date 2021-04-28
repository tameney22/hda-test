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
import Toc from './pages/editions-toc/Toc';
import Facsimilies from './pages/Facsimilies/Facsimilies.js';
import MiradorViewer from './pages/Facsimilies/MiradorViewer.js';
import Citation from './pages/About/Citation';

//import './firebase/firebase.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/editions-toc/:teiName" component={Toc} />
            <Route exact path="/editions/:teiName" render={props => (<Redirect to={`/editions/${props.match.params.teiName}/1R`} />)} />
            <Route path="/editions/:teiName/:stone" component={DigitalEdition} />
            <Route path="/search" component={Search} />
            <Route path="/about/collaborators" component={Collaborators} />
            <Route path="/about/technical" component={Technical} />
            <Route path="/about/Bibliography" component={Bibliography} />
            <Route path="/about/Citation" component={Citation} />
            <Route path="/Facsimilies/:teiName" component={Facsimilies} />

            //Add above this so that any unimplemented pages show 404 page
            <Route path="*" component={error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>);
}

export default App;
