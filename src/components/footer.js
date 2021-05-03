//This is the footer that shows up on every page of the website
//Inside App.js shows the footer using the <Footer> tag

import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Footer() {
    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <Image id="logo_wludh" src="/images/logo_wludh.png" />
                </Col>
                <Col>
                    <Image id="logo_loyola" src="/images/logo_loyola.svg" />
                </Col>
                <Col>
                    <Image id="logo_unf" src="/images/logo_unf.svg" />
                </Col>
                <Col>
                    <Image id="logo_neh" src="/images/logo_neh.png" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Image id="logo_marucelliana" src="/images/logo_marucelliana.png" />
                </Col>
                <Col>
                    <Image id="logo_archiginnasio" src="/images/logo_archiginnasio.png" />
                </Col>
                <Col>
                    <Image id="logo_vescovile" src="/images/logo_vescovile.jpg" />
                </Col>
            </Row>
            <p className="legal">&copy; <a href="https://www.wlu.edu/romance-languages-department/faculty-and-staff/profile?ID=x9689"
                title="Stephen P. McCormick">Stephen P. McCormick</a> and <a href="https://digitalhumanities.wlu.edu/" title="lynda">
                    Washington & Lee Digital Humanities</a> | Site built using <a href="https://reactjs.org" title="ReactJS">
                    ReactJS</a> and the <a href="https://www.tei-c.org/" title="Text Encoding Initiative">Text Encoding Initiative.</a></p> 
        </Container>
    );
}

export default Footer;