import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const Technical = () => {
    return (
        <Container>
            <div class="collab">
                <h1 class="collab_title">Technical Notes</h1>

                <p>For TEI Encoding criteria, please see the Criteria section of the website.</p>

                <h2>Jekyll</h2>
                <p>The <em>Huon d’Auvergne</em> Digital Archive is built using the static site framework <a href="https://jekyllrb.com/">Jekyll</a>. We chose this framework for several reasons. 1) The textual and static nature of our project does not necessitate a robust or dynamic database-driven platform. 2) Familiarity with Jekyll in our small development team. 3) The potential of Jekyll to integrate with new technologies like the CETEIcean Javascript library and the International Image Interoperability Framework.</p>

                <p>We rely heavily on the <a href="https://jekyllrb.com/docs/liquid/">Liquid</a> templating language and the front matter structure in Jekyll to structure our site.</p>

                <h2>CETEIcean</h2>
                <p><a href="https://github.com/TEIC/CETEIcean">CETEIcean</a> is “a Javascript library that allows TEI documents to be displayed in a web browser without first transforming them to HTML.” It uses HTML 5 Custom Elements which enables you to perform actions on the TEI elements as if they were HTML, rather than requiring XML transformation methods like XSLT. Because it uses more common web technologies, we find CETEIcean to be a better fit for our small development team. CETEIcean was created by Hugh Cayless and Raff Viglianti and you can learn more in their Balisage paper: <a href="https://www.balisage.net/Proceedings/vol21/html/Cayless01/BalisageVol21-Cayless01.html">CETEIcean: TEI in the Browser</a>. We are extremely grateful to Raff Viglianti for his assistance in configuring multiple sections of our project, including the <a href="https://github.com/SteveWLU/SteveWLU.github.io/blob/9b977250af06d79f1bd8f581999c982c9687af5c/_layouts/edition.html#L128">page function</a> and the <a href="https://github.com/SteveWLU/SteveWLU.github.io/blob/9b977250af06d79f1bd8f581999c982c9687af5c/_layouts/edition.html#L234">notes function</a>.</p>

                <h2>IIIF</h2>
                <p>The <a href="https://iiif.io/">International Image Interoperability Framework</a> is an emerging standard for providing access to digital images. By using a shared standard instead of local or proprietary systems, researchers and institutions can benefit. Given that our project relies on manuscript from four separate institutions, it was necessary to design our project to accommodate a range of attribution.</p>

                <p>Manifests for each of the manuscript facsimiles are available:</p>
                <ul>
                <li>B manifest</li>
                <li>BR manifest</li>
                <li>P manifest</li>
                <li>R manifest</li>
                <li>T manifest</li>
                </ul>

                <h2>Credits</h2>
            </div>
        </Container>
    )
}

export default Technical
