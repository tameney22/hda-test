import { TEIRender, TEIRoute } from 'react-teirouter'
// import BXML from '../teis/b.xml'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { Viewer } from 'react-iiif-viewer'
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

    const Line = (props) => {
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
                    <p>{props.teiDomElement.textContent}</p>
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


    return (
        <Container>
            <Row>
                <Col>
                    {/* <h1>{manuName}</h1> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Viewer width="100%" height="100vh" iiifUrl={`https://iiif.wlu.edu/iiif/huon/${getTif(teiName, stone)}.tif/info.json`} />
                </Col>
                <Col>
                    <h1>{teiName.toUpperCase()}.XML</h1>
                    {tei.ready ?
                        <TEIRender teiData={tei.data} path={`/teis/${teiName}.xml`}>
                            {/* <TEIRoute el="tei-titlestmt" component={Title} /> */}
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