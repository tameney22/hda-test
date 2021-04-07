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
export default class Tocb extends React.Component {

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
        else
        {
            return(
                <Spinner animation="border" />
            )
        }
    }
}






/*

<TEIRoute el='tei-aquisition' component={getAquisition} />






const getTif = (teiName, milestone) => {
    return teiName + "0".repeat(4 - milestone.length) + milestone.toLowerCase()
}

const { teiName, stone } = useParams()
let hide = stone === "1R" ? false : true; // condition to not skip rendering first few lines in t.xml

const [tei, setTei] = useState({ data: null, ready: false })
// const [manuName, setManuName] = useState("")

useEffect(() => {
    axios.get(`/teis/${teiName}.xml`, {
        "Content-Type": "application/xml; charset=utf-8"
    }).then((response) => {
        setTei({ data: response.data, ready: true })
        // console.log(tei)
    })
}, [teiName])

const refs = new Map()
let query = useQuery()
let lineNum = query.get('lineNum')

const GetAquisition = (props) => {

const ref = createRef()
    let lineNumber = props.teiDomElement.getAttribute('acquisition')
    refs.set(lineNumber, ref)

    let children = props.teiDomElement.children

    return(
        <p>{children.p}</p>
    )
}



*/


/* class getXML extends React.Component {

    state = {
        teiInfo: []
    }

    componentDidMount() {
            axios.get(`/teis/${window.location.pathname}.xml`, {
                "Content-Type": "application/xml; charset=utf-8"
            }).then((response) => {
                const teiInfo = response.data;
                this.setState({teiInfo});
            })
    }

    render() {
        return (
          <ul>
            { this.state.teiInfo.map(info => <li>{info.title}</li>)}
            { this.state.teiInfo.map(info => <li>{info.acquisition}</li>)}
          </ul>
        )
      }
} */