import { TEIRender, TEIRoute } from 'react-teirouter'
// import BXML from '../teis/b.xml'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getChildrenDeep } from 'react-nanny'
import { useParams } from 'react-router';

let hide = true;

const Line = (props) => {
    // let lineNum = props.teiDomElement.getAttribute('n')
    // console.log("CALLED:", lineNum)
    // let hide = props.hide
    let mile = props.stone
    let children = props.line.children // Children = anything inside <tei-l> possibly a <tei-milestone>
    let milestone = Array.from(children).find(child => child.nodeName === "TEI-MILESTONE")
    if (milestone) {
        console.log("REACHED")
        if (milestone.getAttribute('n') === mile) {
            hide = false
        } else {
            hide = true
        }
    }

    return (
        <>
            {!hide ?
                <>
                    {/* <h2>{milestone.getAttribute('n')}</h2> */}
                    <p>{props.text}</p>
                </>
                : <></>}
        </>
    )
}

const LaisseTextOld = (props) => {
    return (
        <div>{props.text}</div>
    )
}

const LaisseText = (props) => {
    // let hide = true
    let milestone = props.stone
    let children = props.laisse.children // Children = <tei-l>
    // let lines = Array.from(children).map((line, i) => {

    let lines = []
    for (let i = 0; i < children.length; i++) {
        let line = children[i]
        if (line.nodeName === "TEI-MILESTONE") {
            if (line.getAttribute('n') === milestone) {
                hide = false
            } else {
                hide = true
            }
            lines.push(<h2 key={i}>{line.getAttribute('n')}</h2>)
        } else {
            lines.push(<Line key={i} text={line.textContent} line={line} stone={milestone} />)
        }
    }//);

    return (
        <>
            <p>{children.length} Lines</p>
            {/* <div>{props.text}</div> */}
            {lines}
        </>
    )
}

// variable for only showing the some of the Laisse for now
var justSome = 5
var count = 0
const LaisseTest = (props) => {
    if (count < justSome) {
        count++
        let children = Array.from(props.teiDomElement.children)
        console.log("LINES:", children.length)
        let lines = children.filter(line => line.textContent).map((line, i) => {
            return <Line key={i} text={line.textContent} />
        });
        return (
            <div>{lines}</div>
        )
    } else {
        return (<div></div>)
    }
}

const Laisse = (props) => {
    return (
        <div>{props.children}</div>
    )
}

const Title = (props) => {
    let manuName = props.teiDomElement.textContent;
    return (
        <h2>{manuName}</h2>
    )
}

const BodyOld = (props) => {
    let children = props.teiDomElement.children //.filter(elem => elem.nodeName === "tei-milestone").length
    // console.log(children)
    let content = Array.from(children).map((lg, i) => {
        return <LaisseText key={i} text={lg.textContent} laisse={lg} />
    });
    // let milestones = children.querySelectorAll('tei-milestone')
    // console.log(milestones)
    return (
        <>
            <h3>{children.length} elements found</h3>
            <div>{content}</div>
        </>
    )
}

const Body = (props) => {
    let milestone = props.stone
    let children = props.teiDomElement.children // Children = <tei-lg>
    // console.log(children)
    let content = Array.from(children).map((lg, i) => {
        return <LaisseText key={i} text={lg.textContent} laisse={lg} stone={milestone} />
    });
    // let milestones = children.querySelectorAll('tei-milestone')
    // console.log(milestones)
    return (
        <>
            <h3>{children.length} elements found</h3>
            <div>{content.slice(0, 5)}</div>
        </>
    )
}

const Milestone = (props) => {
    let mile = props.teiDomElement.getAttribute('n')
    // let parent = props.teiDomElement.parentNode
    // console.log(parent)
    return (
        <p>{mile}</p>
    )
}

const DigitalEdition = () => {
    const { teiName, stone } = useParams()
    console.log(teiName)
    const [tei, setTei] = useState({ data: null, ready: false })
    const [hide, setHide] = useState(true)

    useEffect(() => {
        axios.get(`/teis/${teiName}.xml`, {
            "Content-Type": "application/xml; charset=utf-8"
        }).then((response) => {
            setTei({ data: response.data, ready: true })
            // console.log(tei)
        })
    }, [teiName])

    return (
        <div>
            <h1>{teiName}.XML</h1>
            {tei.ready ?
                <TEIRender teiData={tei.data} path={`/teis/${teiName}.xml`}>
                    {/* <TEIRoute el="tei-title" component={Title} /> */}
                    {/* <TEIRoute el='tei-l' component={Line} /> */}
                    {/* <TEIRoute el='tei-lg' component={LaisseTest} /> */}
                    <TEIRoute el='tei-body' >
                        <Body stone={stone} hide={setHide} />
                    </TEIRoute>
                    {/* <TEIRoute el='tei-milestone' component={Milestone} /> */}
                </TEIRender>
                : <h2>Loading. . .</h2>}
        </div>
    );

}

export default DigitalEdition;