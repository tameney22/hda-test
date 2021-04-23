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
import annotator from 'annotator'
import CETEI, { addStyle } from 'CETEIcean'
import $ from 'jquery'
import React from 'react';
import TopBar from './TopBar.js'
import './DigitalEdition.css'

class DigitalEdition extends React.Component{

    state = {   //Sets default state to "Hey I don't have the xml data loaded in yet"
        ready: false
    } //IMPORTANT: Every time a state switches, the website gets re-redered

    componentDidMount() {
        //var app = new annotator.App();
        //app.include(annotator.ui.main);
        //app.include(annotator.storage.http);
        //app.start();

        // CODE TO HIDE A PAGE
        function showPage(page) {
            // Hide all text that does not belong to the page indicated
            var n
            var pbs = 0
            var hide = false

            // First, remove all hiding CSS classes, if present.
            Array.from(document.querySelectorAll('.hid_page')).map(function (el) {
                el.classList.remove('hid_page')
            })

            // Walk trough all descendants of tei-text
            var walk = document.createTreeWalker(document.querySelector('tei-text'), NodeFilter.SHOW_ALL, null, false)
            while (n = walk.nextNode()) {
                if (n.nodeType === Node.ELEMENT_NODE) {
                    //  If this is a page beginning, update page count.
                    //  If page count is lower or higher than the page requested, set 'hide' flag.
                    //  If page count corresponds to the page requested, remove 'hide' flag.
                    if (n.localName === 'tei-milestone') {
                        pbs++
                        if (pbs != page) {
                            hide = true
                        } else {
                            hide = false
                        }
                    }

                    // If the hide flag is set and this is an empty element, hide it just in case the
                    // CETEIcean CSS (or other) does something with it.
                    if (hide && n.childNodes.length === 0) {
                        n.classList.add('hid_page')
                    }
                    //RAFF 10/19 just this if statement
                    if (hide && n.tagName === 'tei-note') {
                        n.classList.add('hid_note')
                    }

                } else if (n.nodeType === Node.TEXT_NODE) {
                    // We mostly operate at text node level by storing and restoring text data.

                    // Start by always restoring text data is previously removed.
                    if (n.storedContent) {
                        n.textContent = n.storedContent
                    }

                    // If the 'hide' flag is set, store text content and remove it.
                    if (hide) {
                        n.storedContent = n.textContent
                        n.textContent = ''
                    }
                }
            }
        }


        // CODE TO RUN CETEICEAN
        var CETEIcean = new CETEI()

        CETEIcean.getHTML5(`/teis/b.xml`, function (data) {

            document.getElementById("TEI").innerHTML = ""
            document.getElementById("TEI").appendChild(data)
            /*CETEIcean.addStyle(document, data)*/

            // Get status from TEI header <change> tag and place in the update div (line 96)
            var update = data.querySelector("tei-change")
            document.getElementById("status").innerHTML = ""
            document.getElementById("status").appendChild(update)
            /*CETEIcean.addStyle(document, data)*/

            //get current page
            const currentMilestone = document.getElementById("TEI").getAttribute("data-milestone");

            //show current page
            showPage(currentMilestone)

            // to show notes
            var CETEIceanNotes = new CETEI()

            CETEIceanNotes.getHTML5(`/teis/notes-b.xml`, function (data) {



                // to get note IDs RAFF 10/19
                var visible_ids = Array.from(document.querySelectorAll('#TEI  tei-note:not(.hid_page')).map(function (n) { return n.getAttribute('xml:id') })
                console.log(visible_ids)

                /// Raff 10/19
                visible_ids.forEach(function (id) {
                    if (id) {
                        var note = data.querySelector('tei-note[target="#' + id + '"]');
                        try {
                            document.getElementById('edition-notes').appendChild(note);
                        } catch (TypeError) {
                            // expected output: ReferenceError: nonExistentFunction is not defined
                            // Note - error messages will vary depending on browser
                        }
                    }
                });

            });

        });

        //Variables for toggle buttons
        var options = {
            "rajna_reconstruction": false,
            "expanded_abbreviations": true,
            "show_french": true,
            "notes": true
        };

        //Function to toggle abbreviations
        $("input[name='abbreviations-toggle'").change(function () {
            $("tei-choice").each(function () {
                $(this).children("tei-ex").toggle();
                $(this).children("tei-abbr").toggle();
            })
            options.expanded_abbreviations = $(this).is(":checked");
        });

        //Function to toggle rajna reconstruction
        $("input[name='rajna-reconstruction'").change(function () {
            options.rajna_reconstruction = $(this).is(":checked");
            if (options.rajna_reconstruction) {
                $("tei-seg").css("color", "red");
            } else {
                $("tei-seg").css("color", "black");
            }
        });

        //Function to show french
        $("input[name='show-french'").change(function () {
            options.show_french = $(this).is(":checked");
            if (options.show_french) {
                $("tei-span").css("color", "blue");
            } else {
                $("tei-span").css("color", "black");
            }
        });

        // Function to turn notes div on/off 
        $("input[name='notes'").change(function () {
            $("#edition-notes").toggle();
        });

        // The following is for the search result scrolling to the line
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const lineNum = urlParams.get('lineNum');

        // Check every 100ms if element exists before trying to highlight and scroll to it
        var checkExist = setInterval(function () {
            if ($(`tei-l`).length) {
                if ($(`tei-l[n="${lineNum}"]`).length) {
                    if (lineNum) {
                        const lineText = $(`tei-l[n="${lineNum}"]`).html();

                        $('#TEI').animate({
                            scrollTop: $(`tei-l[n="${lineNum}"]`).offset().top - $(`tei-l[n="${lineNum}"]`).parent().offset().top
                        }, 'slow');

                        $(`tei-l[n="${lineNum}"]`).html(`<span id="highlight">${lineText}</span>`);
                    }
                }
                clearInterval(checkExist);
            }
        }, 100);

        // Always display line numbers, after waiting for the tei-l's to load
        var teiLExist = setInterval(function () {
            if ($(`tei-l`).length) {
                $('tei-l').each(function () {
                    var lineNum = $(this).attr('n');
                    if ($(this).text() !== "" && lineNum % 5 === 0) {
                        this.innerHTML = `${this.innerHTML} <span className="number">${lineNum}</span>`;
                    }
                });
                clearInterval(teiLExist);
            }
        }, 100);

        // Logic to toggle showing divs
        $(".toggleDiv").change(function () {
            var value = $(this).attr('value');
            if (this.checked) {
                $(`#${value}`).show();
            } else {
                $(`#${value}`).hide();
            }
        });
    }

    render() {

        const { ready } = this.state;

        return (
            <Container>
                <TopBar />
                {/*
                <Row>
                    <Col>
                    {lineNum ? <Button variant='link' style={{ backgroundColor: "#5f0000", color: "white", margin: '15px' }} onClick={scrollToLine}>Scroll to line {lineNum}</Button> : <></>}
                    </Col>
                </Row>
                */}
                <Row className="row-eq-height">
                    <Col id="VIEWER">
                        <Viewer width="100%" height="80vh" background_color="#FFFFFF" iiifUrl={`https://iiif.wlu.edu/iiif/huon/b001r.tif/info.json`} />
                    </Col>
                    <Col id="TEI" className="custom-scroll" data-milestone="1">
                    </Col>
                    <Col id="edition-notes" className='custom-scroll' data-milestone="1">
                        <h2>Edition Notes</h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DigitalEdition;