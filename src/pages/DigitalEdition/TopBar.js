import { TEIRender, TEIRoute } from 'react-teirouter'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect, createRef } from 'react';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { Viewer } from 'react-iiif-viewer'
import './DigitalEdition.css'
import annotator from 'annotator'
import CETEI, { addStyle } from 'CETEIcean'
import $ from 'jquery'
import React from 'react';

function getPrev()
{
    var prevLocation = "/";

    prevLocation += window.location.pathname.split("/")[1] + "/"; //gets the first domain i.e. editions
    prevLocation += window.location.pathname.split("/")[2] + "/"; //gets second domain i.e. current edition like b

    var currPage = window.location.pathname.split("/")[3]; //gets current page i.e. 1R
    var pageNum = Number(currPage.substring(0,currPage.length-1));
    var pageLetter = currPage.substring(currPage.length-1);

    if(currPage === "1R")
    {
        prevLocation+=currPage;
    }
    else if(pageLetter === "V")
    {
        prevLocation+=pageNum+"R";
    }
    else if(pageLetter === "R")
    {
        prevLocation+=(pageNum-1)+"V";
    }

    return prevLocation;
}

function getNext()
{
    var nextLocation = "/";

    nextLocation += window.location.pathname.split("/")[1] + "/"; //gets the first domain i.e. editions
    nextLocation += window.location.pathname.split("/")[2] + "/"; //gets second domain i.e. current edition like b

    var currPage = window.location.pathname.split("/")[3]; //gets current page i.e. 1R
    var pageNum = Number(currPage.substring(0,currPage.length-1));
    var pageLetter = currPage.substring(currPage.length-1);

    if(pageLetter === "R")
    {
        nextLocation+=pageNum+"V";
    }
    else if(pageLetter === "V")
    {
        nextLocation+=(pageNum+1)+"R";
    }
    //TODO: not sure how to find the last page

    return nextLocation;
}
class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPage: getPrev(),
            curPage: window.location.pathname.split("/")[3],
            nextPage: getNext(),
            abbrev: false,
            notes: true,
            tei: true,
            manu: true
        };
  
        this.handleAbbrev = this.handleAbbrev.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        this.handleTEI = this.handleTEI.bind(this);
        this.handleManu = this.handleManu.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    handleAbbrev(event) {
        var temp = this.state.abbrev;
        this.setState({abbrev: !temp});
    }

    handleNotes(event) {
        var temp = this.state.notes;
        this.setState({notes: !temp});
    }

    handleTEI(event) {
        var temp = this.state.tei;
        this.setState({tei: !temp});
    }

    handleManu(event) {
        var temp = this.state.manu;
        this.setState({manu: !temp});
        //↩↪
    }

    handleTextChange(text) {
        this.setState({curPage: text});
    }

    handlePageChange() {
        
        var userPage = "/";
    
        userPage += window.location.pathname.split("/")[1] + "/"; //gets the first domain i.e. editions
        userPage += window.location.pathname.split("/")[2] + "/"; //gets second domain i.e. current edition like b
        userPage += this.state.curPage;

        alert(userPage);
    }
  
    render() {
        return (
            <form onSubmit={this.handlePageChange}>
                <Row>
                    <Col xs="auto">
                        <a href="https://github.com/SteveWLU/hda/blob/development/editions/p.xml"><span class="icon icon--github"><svg viewBox="0 0 16 16" width="16px" height="16px"><path fill="#828282" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/></svg>
                        </span><span class="username"></span>Source Code</a>
                    </Col>
                    <Col xs="auto">
                        <a href={this.state.prevPage}>↩</a>

                        <input type="text" 
                        value={this.state.curPage} 
                        onChange={e => this.handleTextChange(e.target.value)} 
                        className="curPage" 
                        name="cur-page"/>

                        <a href={this.state.nextPage}>↪</a>
                    </Col>
                    <Col xs="auto">
                        <label class="switch">
                        <input type="checkbox" name="abbreviations-toggle" onChange={this.handleAbbrev}/>
                        <div class="slider round"></div>
                        </label> Expand Abbreviations
                    </Col>
                    <Col xs="auto">
                        <label class="switch">
                        <input type="checkbox" name="notes" value="edition-notes" onChange={this.handleNotes} checked={this.state.notes} />
                        <div class="slider round"></div>
                        </label> Notes
                    </Col>
                    <Col xs="auto">
                        <input class="form-check-input toggleDiv" type="checkbox" id="showTEI" value={"TEI"} onChange={this.handleTEI} checked={this.state.tei} />
                        <label class="form-check-label" for="showTEI">Show TEI</label>
                    </Col>
                    <Col xs="auto">
                        <input class="form-check-input toggleDiv" type="checkbox" id="showManu" value={"VIEWER"} onChange={this.handleManu} checked={this.state.manu} />
                        <label class="form-check-label" for="showManu">Show Manuscript</label>
                    </Col>
                    <Col xs="auto">
                        
                    </Col>
                    <Col xs="auto">
                        <div id="status"></div>
                    </Col>
                </Row>
            </form>
      );
    }
  }

  export default TopBar