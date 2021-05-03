//Ignore this file

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

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const DigitalEdition = () => {
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

    // const Title = (props) => {
    //     let title = props.teiDomElement.children[1]
    //     let type = title.getAttribute('type')
    //     let text = title.textContent
    //     // let dso = props.teiDomElement.getAttribute('data-origname')
    //     console.log("Type:", type, text)
    //     setManuName(text)
    //     return (<h2>{text}</h2>)
    // }

    const refs = new Map()
    let query = useQuery()
    let lineNum = query.get('lineNum')

    const scrollToLine = () => refs.get(lineNum).current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    const Line = (props) => {
        // Scrolling when lineNum query param exists
        const ref = createRef()
        let lineNumber = props.teiDomElement.getAttribute('n')
        refs.set(lineNumber, ref)

        let children = props.teiDomElement.children
        let milestone = Array.from(children).find(child => child.nodeName === "TEI-MILESTONE")
        if (milestone) {
            // console.log("REACHED:", milestone.getAttribute('n'))
            if (milestone.getAttribute('n') === stone) {
                hide = false
            } else {
                hide = true
            }
        }

        return (
            <>
                {!hide ?
                    <p id={lineNum && lineNum === lineNumber ? 'highlight' : null} ref={ref}>
                        {props.teiDomElement.textContent}
                        {props.teiDomElement.getAttribute('n') % 5 === 0 ?
                            <span className="number" style={{ float: 'right' }}>{props.teiDomElement.getAttribute('n')}</span>
                            : <></>}</p>
                    : <></>}
            </>
        )
    }



    const Laisse = (props) => {

        return (
            <>
                {!hide ?
                    <h3>{props.teiDomElement.textContent}</h3>
                    : <></>}
            </>
        )
    }

    var app = new annotator.App();
    app.include(annotator.ui.main);
    app.include(annotator.storage.http);
    app.start();

    return (
        <Container>
            <Row className="mainBar">
                <Col xs="auto">
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="abbrev-switch"
                            label="Expand Abbreviations"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="notes-switch"
                            label="Notes"
                            inline
                        />
                        <Form.Check 
                            type="checkbox"
                            id="tei-switch"
                            label="Show TEI"
                            inline
                        />
                        <Form.Check 
                            type="checkbox"
                            id="manuscript-switch"
                            label="Show Manuscript"
                            inline
                        />
                        <Form.Label className="align-items-right" inline>
                            Last updated April 4, 2021
                        </Form.Label>
                    </Form>
                </Col>
                <Col xs="auto">
                        <a href="https://github.com/SteveWLU/hda">Source Code</a>
                </Col>
                <br />
            </Row>
            <Row>
                <Col>
                {lineNum ? <Button variant='link' style={{ backgroundColor: "#5f0000", color: "white", margin: '15px' }} onClick={scrollToLine}>Scroll to line {lineNum}</Button> : <></>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Viewer width="100%" height="100vh" iiifUrl={`https://iiif.wlu.edu/iiif/huon/${getTif(teiName, stone)}.tif/info.json`} />
                </Col>

                <Col id="TEI" className="custom-scroll">
                    <h1>{teiName.toUpperCase()}.XML</h1>


                    {tei.ready ?
                        <TEIRender teiData={tei.data} path={`/teis/${teiName}.xml`}>
                            {/*<TEIRoute el="tei-titlestmt" component={Title} />*/}
                            {/* <TEIRoute el='tei-body' >
                                <Body stone={stone} />
                            </TEIRoute> */}
                            <TEIRoute el='tei-l' component={Line} />
                            <TEIRoute el='tei-head' component={Laisse} />
                        </TEIRender>
                        : <Spinner animation="border" />}
                </Col>
            </Row>
        </Container>
    );

}

export default DigitalEdition;