import lunr from 'lunr'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import InputGroup from 'react-bootstrap/InputGroup'
import './Search.css'

require('lunr-languages/lunr.stemmer.support')(lunr);
require('lunr-languages/lunr.fr')(lunr);
require('lunr-languages/lunr.it')(lunr);
require('lunr-languages/lunr.multi')(lunr);

const Result = ({ shortName, lineText, lineNum, page, manuTitle }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {lineText}
                </Card.Text>
                {/* <Card.Subtitle className="mb-2 text-muted">{manuTitle}</Card.Subtitle> */}
                <Card.Link href={`/editions/${shortName}/${page.toUpperCase()}?lineNum=${lineNum}`}>Line Number: {lineNum}</Card.Link>
            </Card.Body>
        </Card>
    )
}

const wildcard = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">How to use wildcards?</Popover.Title>
        <Popover.Content>
            <p>You can use an asterisk (*) anywhere in the search term.</p>
            <p>For example, <strong>foo*</strong> will match all words beginning with 'foo'.</p>
            <p>Similarly, you can use <strong>*foo</strong> and <strong>f*o</strong>.</p>
        </Popover.Content>
    </Popover>
);



const Search = () => {
    const [index, setIndex] = useState({ ready: false, index: null })
    const [map, setMap] = useState(null)
    const [term, setTerm] = useState()
    const [results, setResults] = useState()

    useEffect(() => {
        axios.get('/index.json').then((res) => res.data).then((index) => {
            const theMap = new Map()
            let idx = lunr(function () {
                // French and Italian language support
                this.use(lunr.multiLanguage('fr', 'it'));
                this.ref('id')
                this.field('lineText')

                index.forEach((doc) => {
                    const id = doc.id;
                    const lineText = doc.lineText;
                    theMap.set(doc.id, [doc.lineNum, doc.lineText, doc.manuscriptTitle, doc.page]);
                    this.add({ id, lineText });
                }, this);
            });
            setIndex({ ready: true, index: idx })
            setMap(theMap)
        })
    }, [setIndex, setMap])

    const ResultsList = ({ name, manuName }) => {
        return (
            <Col className="custom-scroll" sm='12' md='6' lg='3'>
                <h4 className="manuName">{manuName}</h4>
                {results.filter((result) => {
                    let colonIndex = result.ref.indexOf(":") + 1;
                    let shortName = result.ref.substring(colonIndex + 1);
                    return shortName === name
                }).map((result, i) => {
                    let doc = map.get(result.ref)
                    let page = doc[3];
                    let manuTitle = doc[2];
                    let lineText = doc[1];
                    let lineNum = doc[0];
                    let colonIndex = result.ref.indexOf(":") + 1;
                    let shortName = result.ref.substring(colonIndex + 1);

                    return (<Result key={i} shortName={shortName} lineNum={lineNum} lineText={lineText} manuTitle={manuTitle} page={page} />)
                })}
            </Col>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // console.log("Submitted:", term)
        let results = index.index.search(term)
        // console.log("Results:", results)
        // console.log("Index:", index)
        // console.log("Map:", map)
        setResults(results)
    };


    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Search Here</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg='6'>
                    {index.ready ?
                        <Form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <Form.Label htmlFor="searchInputGroup" srOnly>
                                        Search Term
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <Form.Control id="searchInputGroup" type="text" placeholder="Search Term" onChange={e => setTerm(e.target.value)} required />
                                        <InputGroup.Append>
                                            <Button id="search-btn" type="submit">Search</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col lg='1'>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={wildcard}>
                                        <Button variant="link">Help</Button>
                                    </OverlayTrigger>
                                </Col>
                            </Form.Row>
                        </Form>
                        : <Spinner animation="border" />}
                </Col>
            </Row>
            {results ?
                <Row>
                    <Col>
                        {results.length > 0 ?
                            <h2>{results.length} results found!</h2>
                            :
                            <h2>No results found with that search term. Please try again.</h2>}
                    </Col>
                </Row>
                : <></>}

            {results && results.length > 0 ?
                <Row className="justify-content-center">
                    <ResultsList name="b" manuName="Berlin Kupferstichkabinett 78 D 8 (olim Hamilton 337)" />
                    <ResultsList name="br" manuName="Bologna Biblioteca dell'Archiginnasio B. 3489" />
                    <ResultsList name="p" manuName="Padua Biblioteca del Seminario Vescovile MS 32" />
                    <ResultsList name="t" manuName="Turin, Biblioteca nazionale, N III 19" />
                </Row>
                : <></>}

        </Container>

    )
}

export default Search