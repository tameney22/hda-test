/* eslint-disable jsx-a11y/anchor-is-valid */


//This is the collaborators page, this just has basic links
import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const Collaborators = () => {
    return(
        <Container>
                <br />
                <h1 class="collab_title">Huon d'Auvergne Project Team</h1>
                <div class="collab">
                    <br />
                    <h2>Project Directors</h2>
                        <p><a href="http://library.wlu.edu/about/library-directory/mackenzie-brooks">Mackenzie Brooks</a>, Associate Professor, Digital Humanities Librarian, Washington and Lee University.<br />
                        Lead investigator for TEI mark-up structure, data management, and user interface and database development.</p>
                        <p><a href="https://www.wlu.edu/romance-languages-department/faculty-and-staff/profile?ID=x9689">Stephen P. McCormick</a>, Associate Professor of French and Italian, Washington and Lee University.<br />
                        Lead investigator for Padua and the Barbieri fragment editions, TEI development.</p>
                        <p><a href="https://www.loyola.edu/academics/modern-languages/faculty/morgan">Leslie Zarker Morgan</a>, Professor Emerita of Italian and French, Loyola University Maryland.<br />
                        Lead investigator for Berlin and Turin editions, general lead for project development and management, TEI development.</p>
                        <p><a href="http://www.unf.edu/bio/N00009290">Shira Schwam-Baird</a>, Professor Emerita of French, University of North Florida.<br />
                        Lead investigator for Berlin translation, Old French philology, literary and historical commentary and annotation.</p>
                    <h2>Collaborating Scholars</h2>
                        <p><a href="http://www.ed.ac.uk/profile/philip-bennett">Philip E. Bennett</a>, Professor Emerita and Honorary Fellow, University of Edinburgh.<br />
                        Old French philology, historical and literary context, and commentary and annotation of editions.</p>
                        <p><a href="https://history.arizona.edu/people/alan-e-bernstein">Alan Bernstein</a>, Professor Emeritus, University of Arizona.<br />
                        History and literary representations of Hell, commentary and annotation of editions.</p>
                        <p><a href="http://ciham.ish-lyon.cnrs.fr/membres/jean-claude-vallecalle">Jean-Claude Vallecalle</a>, Professor Emeritus, Université Lumière Lyon 2.<br />
                        Old French philology, historical and literary context, and commentary and annotation of editions.</p>
                        <p><a href="http://independent.academia.edu/MichelaGScattolini">Michela G. Scattolini</a>, Independent researcher, Genoa, Italy.<br />
                        Old French and Italian philology, development of Turin, Padua, and Barbieri editions, and commentary and annotation of editions.</p>
                    <h2>Digital Humanities Consultants</h2>
                        <p><a href="https://mith.umd.edu/people/person/raffaele-viglianti/">Raffaele Viglianti</a>, Research Programmer, Maryland Institute for Technology in the Humanities.<br />
                        Initial TEI and programming development for Version 1.0, development and implementation of TEI framework and CETEIcean in Jekyll for Version 2.0.</p>
                        <p><a href="http://jeffreycwitt.com/">Jeffrey Witt</a>, Associate Professor of Philosophy, Loyola University Maryland.<br />
                        Initial TEI and programming development for Version 1.0, development and implementation of TEI framework and the International Image Interoperability Framework (IIIF) protocol.</p>
                        <p><a href="http://scholarslab.org/people/brandon-walsh/&gt;">Brandon Walsh</a>, Head of Student Programs, Scholars' Lab, University of Virginia.<br />
                        Development and deployment of Version 1.0 in Ruby on Rails.</p>
                    <h2>Current Research Associates</h2>
                        <p><a href="">Alexander Ali Reza Khaledan</a>, Computer Science, Loyola University Maryland, Class of 2021.<br />
                        Version 3.0, including transition to React.js, adding user account interface with annotation and comment tools, and SQL database support (Jan. - May, 2021).</p>
                        <p><a href="">Hussiny El-Hussiny</a>, Computer Science, Washington &amp; Lee University, Class of 2024.<br />
                        Programming for Version 3.0, including text analysis tools and data visualization using using Python and the Natural Language Toolkit (NLTK), experimentation with neural networks (Summer 2021).</p>
                        <p><a href="https://www.linkedin.com/in/jordan-hettleman-ba5998178/">Jordan Hettleman</a>, Computer Science, Loyola University Maryland, Class of 2021.<br />
                        Version 3.0, including transition to React.js, adding user account interface with annotation and comment tools, and SQL database support (Jan. - May, 2021).</p>
                        <p><a href="">Jack Mitchell</a>, Italian and History, Washington &amp; Lee University, Class of 2023.<br />
                        Programming for Version 3.0, including text analysis tools and data visualization using using Python, user interface development (Summer 2021).</p>
                        <p><a href="https://yosephtamene.com/">Yoseph Tamene</a>, Computer Science and Digital Culture and Information, Washington &amp; Lee University, Class of 2022.<br />
                        Development and deployment of search function using Lunr JavaScript library, custom JavaScript development for edition version comparison, and development of Version 3.0 and transition to React.js (Nov. 2020 - April 21).</p>
                    <h2>HDA Alumni</h2>
                        <p><a href="">Megan Doherty</a>, French, Washington &amp; Lee University, 2019.<br />
                        Jekyll framework, TEI markup and IIIF implementation for Version 2.0 (Jan. 2018 - April 2019).</p>
                        <p><a href="">Dashiell Dericks</a>, TEI development and markup, Washington &amp; Lee University, 2018.<br />
                        TEI development and markup for Version 1.0 (Sept. 2015 - April 2016).</p>
                        <p><a href="">Abdurrafey Khan</a>, TEI markup and user interface development, Washington &amp; Lee University, 2017.<br />
                        Jekyll framework, TEI markup and user interface development for Version 2.0 (June 2016 - May 2017).</p>
                    <h2>Collaborating Institutions</h2>
                        <p><a href="http://www.archiginnasio.it/">Biblioteca Comunale dell'Archiginnasio</a> (Bologna, Italy)</p>
                        <p><a href="http://www.maru.firenze.sbn.it/">Biblioteca Marucelliana</a> (Florence, Italy)</p>
                        <p><a href="http://www.bnto.librari.beniculturali.it/">Biblioteca Nazionale di Torino</a> (Turin, Italy)</p>
                        <p><a href="http://www.bibliotecaseminariopda.it/">Biblioteca Antica del Seminario Vescovile di Padova</a> (Padua, Italy</p>
            </div>
        </ Container>
    )
}

export default Collaborators