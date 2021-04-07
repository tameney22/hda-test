import { TEIRender, TEIRoute } from 'react-teirouter';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useState, useEffect, createRef } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Viewer } from 'react-iiif-viewer';
import {TokenAnnotator, TextAnnotator} from 'react-text-annotate';
import Card from 'react-bootstrap/Card';
import { State, Toggle } from 'react-powerplug';
import annotator from 'annotator';
import { NavLink, Link } from 'react-router-dom';
import { XMLParser } from 'react-xml-parser';

export default class Toc extends React.Component {

    state = {
        data: null,
        ready: false
    }

    componentDidMount() {
        var self = this;
        var temp;

        axios.get(`/teis/${window.location.pathname.substring(14)}.xml`, {
            "Content-Type": "application/xml; charset=utf-8"
        }).then(response => {
            this.setState((state) => {
                // Important: read `state` instead of `this.state` when updating.
                temp = response.data;
                var data = {};  
                var parseString = require('xml2js').parseString;
                parseString(temp, function (err, result) {data = result;})

                this.setState((state) => {
                    // Important: read `state` instead of `this.state` when updating.
                    return {data: data, ready: true}
                });
              });
        })
    }

    render()
    {     
        const { data, ready } = this.state; 

        console.log("Ready:"+this.state.ready);
        if(ready === true)
        {
            return(
                <Container>
                    <Row>
                        <Col>
                            <h1>{data.TEI.teiHeader[0].fileDesc[0].titleStmt[0].title[1]._}</h1>

                            <h2>Introduction to Edition</h2>

                            <p>{data.TEI.teiHeader[0].fileDesc[0].sourceDesc[0].msDesc[0].history[0].acquisition[0].p[0]}</p>
                            
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Viewer width="100%" height="100vh" iiifUrl={`https://iiif.wlu.edu/iiif/huon/${window.location.pathname.substring(14)}001r.tif/info.json`} />
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
        else
        {
            return(
                <Spinner animation="border" />
            )
        }
    }
}


/**/