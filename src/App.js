/* eslint-disable react/jsx-no-comment-textnodes */
// import logo from './logo.svg';

//This file is incredibly important and handles the entire website
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
import React from 'react';
import SignoutBetween from './pages/SignoutBetween';
import SigninBetween from './pages/SigninBetween';
import Signout from './pages/Signout';
import Signin from './pages/Signin';
//Add an import for every page you want to add

//import './firebase/firebase.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation /> {/*This displays the nav bar on every page*/}
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
            <Route path="/signoutbetween" component={SignoutBetween} />
            <Route path="/signinbetween" component={SigninBetween} />
            <Route path="/signout" component={Signout} />
            <Route path="/signin" component={Signin} />
            {/*Add another route for each new page*/}
            {/*The path should match with the links in nav.js inside the data folder*/}
            {/*The component is the same name used in the import statement at the top*/}

            {/*Add above this so that any unimplemented pages show 404 page*/}
            <Route path="*" component={error404} />
          </Switch>
        </div>
        <Footer /> {/*This displays the footer on every page*/}
      </div>
    </Router>);
}

export default App;
