//This is just a basic error 404 page and this shows whenever a page does not exist

import React from "react";
import Container from 'react-bootstrap/Container'

const error404 = () => {
    return(
        <Container>
            <h1>404</h1>

            <p><strong>Page not found :(</strong></p>
            <p>The requested page could not be found.</p>
        </Container>
    )
}

export default error404