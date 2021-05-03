//This page is weird to explain. I wanted the navbar to update as soon as you logged out so this is the itermediary page between clicking sign out and actually seeing that you are signed out
//The entire sign out process is handled here

import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const SignoutBetween = () => {
    firebase.auth().signOut().then(() => { //Google sign out
        //Signout successful
        window.location.href = "/signout";
      }).catch((error) => {
        // An error happened.
      });
    localStorage.removeItem("name");
    localStorage.removeItem("email"); //Deletes cookies
    localStorage.clear(); //Really makes sure the cookies are gone
    return(
        <Container>
            <h1>Sign Out</h1>

            <p><strong>You have been signed out :)</strong></p>
        </Container>
    )
}

export default SignoutBetween