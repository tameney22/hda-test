import {useParams} from 'react-router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {intros} from '../../data/intros'
import './EditionIntro.css'
const EditionIntro = () => {
    const { teiName } = useParams();

    const teiIntro = intros.find((elem) => elem.teiName == teiName)

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{teiIntro.content.title}</h1>
                    <h2>Introduction to Edition</h2>
                    <p>{teiIntro.content.msDesc}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={teiIntro.content.imgUrl} />
                </Col>
                <Col>
                    <h2>Table of Contents</h2>
                    <ul class="list-inline" id="toc">
                        {teiIntro.content.toc.map((item) => {
                            return (
                                <li><a href={item.url}>{item.name}</a></li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default EditionIntro