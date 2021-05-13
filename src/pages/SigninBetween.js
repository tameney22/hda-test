//This page is weird to explain. I wanted the navbar to update as soon as you logged in so this is the itermediary page between clicking sign in and actually seeing that you are signed in
//The entire sign in process is handled here

import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const SigninBetween = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'it';
  
  const message = () => {
    firebase.auth().signInWithRedirect(provider);

   }
  
   /** @type {firebase.auth.OAuthCredential} */
   var curr = firebase.auth().currentUser;
   if (curr != null) {
      var name = curr.displayName;
      var email = curr.email.split("@")[0];
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      window.location.href = "/signin";
    } 

    return(
        <Container>
            <h1>Sign In Below</h1>
            <button onClick={message} class="signinbutton">Sign In</button>
        </Container>
    )
}

export default SigninBetween