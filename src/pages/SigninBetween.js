import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const SigninBetween = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'it';
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      var curr = firebase.auth().currentUser;
  
      if (curr != null) {
          var email = curr.email;
          var name = curr.displayName;
          sessionStorage.setItem("name", name); 
          sessionStorage.setItem("email", email); //Cookies
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