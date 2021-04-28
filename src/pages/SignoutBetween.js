import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const SignoutBetween = () => {
    firebase.auth().signOut().then(() => {
        //Signout successful
        window.location.href = "/signout";
      }).catch((error) => {
        // An error happened.
      });
    sessionStorage.removeItem("name");
    return(
        <Container>
            <h1>Sign Out</h1>

            <p><strong>You have been signed out :)</strong></p>
        </Container>
    )
}

export default SignoutBetween