//This file controls the Table of Contents for every edition

import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { Viewer } from 'react-iiif-viewer';
import { NavLink } from 'react-router-dom';

var manifestName = window.location.pathname.split("/")[2];
if (manifestName === "bt")
{
    manifestName = "b"; //This makes sure if bt is shown, it just shows the b manifest
}

export default class Toc extends React.Component {

    state = {   //Sets default state to "Hey I don't have the xml data loaded in yet"
        data: null,
        ready: false
    } //IMPORTANT: Every time a state switches, the website gets re-redered

    componentDidMount() {
        var self = this;
        var temp;

        //The substring gets the letter at the end of the pathname i.e. /editions-toc/b goes to just b since /editions-toc/ is 14 characters
        axios.get(`/teis/${window.location.pathname.substring(14)}.xml`, {  //Axios pulls in xml data
            "Content-Type": "application/xml; charset=utf-8"
        }).then(response => {
            self.setState((state) => {
                // This is what ahppens after the xml data is pulled
                temp = response.data; //save data
                var data = {};  
                var parseString = require('xml2js').parseString; 
                parseString(temp, function (err, result) {data = result;}) //change xml data from a string to a javascript object
                
                return {data: data, ready: true} //Sets state to "Yay! XML data is loaded and converted into a readable object"
                //IMPORTANT: Every time a state switches, the website gets re-redered
              });
        })
    }

    render() //This is what gets re-redered
    {     
        const { data, ready } = this.state; //Allows access to the xml infomation from above to render() 

        if(ready === true) //Displays page once everything is converted
        {
            return(
                <Container>
                    <Row>
                        <Col>
                            <h1>{data.TEI.teiHeader[0].fileDesc[0].titleStmt[0].title[1]._}</h1> {/*This gets the edition name*/}

                            <h2>Introduction to Edition</h2>

                            <p>{data.TEI.teiHeader[0].fileDesc[0].sourceDesc[0].msDesc[0].history[0].acquisition[0].p[0]}</p> {/*This gets the aquisition tag*/}
                            
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Viewer width="100%" height="100vh" iiifUrl={`https://iiif.wlu.edu/iiif/huon/${manifestName}001r.tif/info.json`} />
                        </Col>
                        <Col>
                                <h1 id="toc-title">Table of Contents</h1>
                                <hr id="ms-intro-toc" />
                                <ul id="toc">
                                    
                                    <li><NavLink to="/notyetadded">Edition Criteria</NavLink></li>
                                    
                                    
                                    <li><NavLink to={'../editions/' + window.location.pathname.substring(14)}>Digital Edition</NavLink></li>
                                    <li><NavLink to="/notyetadded">Berlin Translation</NavLink></li>
                                    
                                    <li><NavLink to={"../Facsimilies/" + window.location.pathname.substring(14)}>Digital Facsimile</NavLink></li>
                                    
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


/*
<h1>{data.TEI.teiHeader[0].fileDesc[0].titleStmt[0].title[1]._}</h1>
*/