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
import Mirador from 'mirador/dist/es/src/index';
import MiradorDownloadPlugin from '../../plugins/MiradorDownloadPlugin.js';
import MiradorDownloadDialog from '../../plugins/MiradorDownloadDialog.js';
import MiradorViewer from './MiradorViewer.js';

class GetLink extends React.Component {
    render() {
      var nameOfText = window.location.pathname.substring(13);

      switch(nameOfText)
      {
        case "b":
            return <a href="https://www.smb.museum/museen-und-einrichtungen/kupferstichkabinett/ueber-uns/service.html">Berlin Kupferstichkabinett</a>;
        case "bt":
            return <a href="https://www.smb.museum/museen-und-einrichtungen/kupferstichkabinett/ueber-uns/service.html">Berlin Kupferstichkabinett</a>;
        case "t":
            return <a href="http://www.bnto.librari.beniculturali.it/index.php?it/218/modulistica">Biblioteca Nazionale Universitaria di Torino</a>;
        case "p":
            return <a href="http://www.bibliotecaseminariopda.it/richiesta-riproduzioni/">Biblioteca del Seminario Vescovile di Padova</a>;
        case "br":
            return <a href="http://www.archiginnasio.it/forms/modulo4.pdf">Biblioteca Comunale dell'Archiginnasio</a>;
        default:
            return "error";
          
      }
    }
  }

export default class Facsimiles extends React.Component {

    state = {   //Sets default state to "Hey I don't have the xml data loaded in yet"
        data: null,
        ready: false
    } //IMPORTANT: Every time a state switches, the website gets re-redered

    componentDidMount() {
        var self = this;
        var temp;

        //The substring gets the letter at the end of the pathname i.e. /editions-toc/b goes to just b since /editions-toc/ is 14 characters
        axios.get(`/teis/${window.location.pathname.substring(13)}.xml`, {  //Axios pulls in xml data
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
                            <h1>{data.TEI.teiHeader[0].fileDesc[0].titleStmt[0].title[1]._}</h1>

                            <p>Images within the Huon Digital Archive may not be printed, reproduced or downloaded. To order reproductions of this manuscript, please review the policies of the <GetLink /></p>
                            
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <MiradorViewer />
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