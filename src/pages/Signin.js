//This is the sign in page confirming you got signed in

import React from "react";
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase';

const Signin = () => {
    return(
        <Container>
            <h1>Sign In</h1>

            <p><strong>You have been signed in :)</strong></p>
        </Container>
    )
}

export default Signin