//This page is weird to explain. I wanted the navbar to update as soon as you logged in so this is the itermediary page between clicking sign in and actually seeing that you are signed in
//The entire sign in process is handled here

import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const SigninBetween = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'it';
  firebase.auth()
    .signInWithPopup(provider) //This brings up the google pop-up
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      var curr = firebase.auth().currentUser;
  
      if (curr != null) {
          var email = curr.email.split("@")[0];
          var name = curr.displayName;
          localStorage.setItem("name", name); 
          localStorage.setItem("email", email); //saves the Cookies
          window.location.href = "/signin";
      }
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    return(
        <Container>
            <h1>Sign In</h1>

            <p><strong>You have been signed in :)</strong></p>
        </Container>
    )
}

export default SigninBetween