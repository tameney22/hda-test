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