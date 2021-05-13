//This is the sign out page confirming you got signed out

import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const Signout = () => {
    localStorage.clear();
    return(
        <Container>
            <h1>Sign Out</h1>

            <p><strong>You have been signed out :)</strong></p>
        </Container>
    )
}

export default Signout