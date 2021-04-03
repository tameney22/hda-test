import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Viewer } from 'react-iiif-viewer'
import { NavLink } from "react-router-dom";
import axios from 'axios';

const tocb = () => {
    return(
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Berlin, Kupferstichkabinett 78 D 8 (olim Hamilton 337)</h1>
                    <p id="demo"></p>
                    
                    <h2>Introduction to Edition</h2>
                    This is the manuscript listed in the Gonzaga inventory of 1407. The first folio bears three copies of the coat of arms of the Gonzaga family.
                    The manuscript passed through noble families in the Italian peninsula and then to the English Hamilton family.
                    In the 19th century, the Prussian government bought a group of the Hamilton manuscripts that included B. The manuscript was first described by Adolf Tobler in 1884.
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Viewer width="100%" height="100vh" iiifUrl={`https://iiif.wlu.edu/iiif/huon/b001r.tif/info.json`} />
                </Col>
                <Col>
                        <h1 id="toc-title">Table of Contents</h1>
                        <hr id="ms-intro-toc" />
                        <ul id="toc">
                            
                            <li><NavLink to="/notyetadded">Edition Criteria</NavLink></li>
                            
                            
                            <li><NavLink to="../editions/b">Digital Edition</NavLink></li>
                            <li><NavLink to="/notyetadded">Berlin Translation</NavLink></li>
                            
                            <li><NavLink to="/notyetadded">Digital Facsimile</NavLink></li>
                            
                            <li><NavLink to="/notyetadded">Concordance</NavLink></li>
                            <li><NavLink to="/notyetadded">Codicology</NavLink></li>
                            <li><NavLink to="/notyetadded">Glossary</NavLink></li>
                        </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default tocb