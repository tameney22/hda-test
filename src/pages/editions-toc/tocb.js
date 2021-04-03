import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Viewer } from 'react-iiif-viewer'
import { NavLink } from "react-router-dom";

const tocb = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Berlin, Kupferstichkabinett 78 D 8 (olim Hamilton 337)</h1>
                    <p id="demo"></p>
                    
                    <h2>Introduction to Edition</h2>
                    
                </Col>
            </Row>

            <Row>
                <Col>
                    <Viewer width="100%" height="100vh" iiifUrl={`https://iiif.wlu.edu/iiif/huon/b001r.tif/info.json`} />
                </Col>
                <Col>
                        <h2>Table of Contents</h2>
                        <hr id="ms-intro-toc" />
                        <ul>
                            
                            <li><NavLink to="/criteria">Edition Criteria</NavLink></li>
                            
                            
                            <li><NavLink to="../editions/b">Digital Edition</NavLink></li>
                            <li><NavLink to="/">Berlin Translation</NavLink></li>
                            
                            <li><a href="../facsimiles/b-facsimile.html">Digital Facsimile</a></li>
                            
                            <li>Concordance</li>
                            <li>Codicology</li>
                            <li>Glossary</li>
                        </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default tocb