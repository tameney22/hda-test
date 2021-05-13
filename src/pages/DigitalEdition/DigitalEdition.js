//This is the bread and butter of the website and ill make sure I comment it well

import './DigitalEdition.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Viewer } from 'react-iiif-viewer'
import annotator from '../../annotator'
import CETEI from 'CETEIcean'
import $ from 'jquery'
import React from 'react';
import TopBar from './TopBar.js'
import * as firebase from 'firebase'

//This finds what page you are currently on by looking at the url 
//Each url will be structure as so:  /textName/(PageNumber)(R or V) i.e. /b/4R
//The code below finds those two values to determine which milestone needs to be read
function getCurrentMilestone() { 
    var endingInfo = window.location.pathname.split("/")[3];
    var len = endingInfo.length;
    var num = Number(endingInfo.substring(0,len-1));
    var letterAtEnd = endingInfo.substring(len-1);
    
    if(letterAtEnd === 'V')
    {
        return num*2;
    }
    else
    {
        return (num*2)-1;
    }
}

//This function uses the link in the url bar to structure the correct string for the IIIF Viewer
//Based on the current page it will generate text like so: "b001R" or "p035V"
function getViewerName() {

    var viewerName = "";

    var editionName = window.location.pathname.split("/")[2]; //This gets the current name of the edition
    if(editionName === "bt")
    {
        viewerName+="b";
    }
    else
    {
        viewerName+=editionName; //This adds the first letter i.e. b
    }

    var endingInfo = window.location.pathname.split("/")[3];
    switch(endingInfo.length) //This statement adds the correct number of 0's in the name i.e. b00
    {
        case 2:
            viewerName+="00";
            break;
        case 3:
            viewerName+="0";
            break;
        case 4:
            viewerName+="";
            break;
        default:
            viewerName+=""
    }

    viewerName+=endingInfo.toLowerCase(); //this adds the rest of the page name i.e. b001r

    return viewerName;
}

class DigitalEdition extends React.Component{

    state = {   //Sets default state to "Hey I don't have the xml data loaded in yet"
        ready: false,
    } //IMPORTANT: Every time a state switches, the website gets re-redered

    componentDidMount() {

        localStorage.setItem("currentManifest", window.location.pathname.split("/")[2]); //This saves the current edition to cookies so annotations can be made per edition

        if(localStorage.getItem("name") === null || localStorage.getItem("email") === null) //This if statement forces the user to log in if they have not already just so they don't make annotations as
                                                                                            //they wouldn't be stored if you don't log in
        {
            var provider = new firebase.auth.GoogleAuthProvider(); 
            firebase.auth().languageCode = 'it';
            firebase.auth() //Launches the google window to sign in (It is a pop-up currently but maybe making it its own page might be better)
                .signInWithPopup(provider)
                .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var curr = firebase.auth().currentUser;
            
                if (curr != null) {;
                    var name = curr.displayName;
                    var email = curr.email.split("@")[0];
                    localStorage.setItem("name", name);
                    localStorage.setItem("email", email);
                } 
                window.location.reload(); //Refreshes the page so that the nav bar updates with your current ID
                // ...
                }).catch((error) => {
                // Handle Errors here.
                window.location.reload(); //Refreshes the page to make sure they log in through google if they X out of the window
                // ...
                });
        }

        // CODE TO HIDE A PAGE
        //All code her was pulled from the current live website with very slight modifications
        function showEdition(page) {
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
                        if (pbs !== page) {
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
                    if (hide && n.localName === 'tei-note') {
                        n.classList.add('hid_note')
                    }

                    if(n.localName === 'tei-note') { //This if statement hides the random parenthesis that would show whenever you make a note tag
                        n.classList.add('hideParen')
                    }

                    if(hide && n.localName === 'tei-ex') { //This if statement hides the random parenthesis that would show whenever you make a note tag
                        n.classList.add('hideParen')
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
        var editionName = window.location.pathname.split("/")[2];

        CETEIcean.getHTML5(`/teis/`+editionName+`.xml`, function (data) //makes this page work with any edition based on current link name
        {
            document.getElementById("TEI").innerHTML = ""
            document.getElementById("TEI").appendChild(data)
            /*CETEIcean.addStyle(document, data)*/

            // Get status from TEI header <change> tag and place in the update div (line 96)
            var update = data.querySelector("tei-change")
            document.getElementById("status").innerHTML = ""
            document.getElementById("status").appendChild(update)
            /*CETEIcean.addStyle(document, data)*/

            //show current page
            showEdition(getCurrentMilestone()) //This function calls the other function at the top of this file for current milestone

            var visible_ids = Array.from(document.querySelectorAll('tei-note:not(.hid_note)')).map(function (n) {
                return n.getAttribute('xml:id')
            })

            // to show notes
            var CETEIceanNotes = new CETEI()

            CETEIceanNotes.getHTML5(`/teis/notes-`+editionName+`.xml`, function (data) 
            {
                // to get note IDs RAFF 10/19

                /// Raff 10/19
                visible_ids.forEach(function (id) {
                    if (id) 
                    {
                        var note;
                        switch(editionName) //NOTE: IF NOTES STOP WORKING FOR ANY EDITION, IT IS PROBABLY HERE
                                            //Make sure the selector chooses the first part of each note tag, right now the only one that isn't consistant is the p.xml
                        {
                            case "b":
                                note = data.querySelector('tei-note[target="#' + id + '"]');
                                break;
                            
                            case "p":
                                note = data.querySelector('tei-note[id="' + id + '"]');
                                break;

                            case "t":
                                note = data.querySelector('tei-note[target="#' + id + '"]');
                                break;

                            case "br":
                                note = data.querySelector('tei-note[target="#' + id + '"]');
                                break;

                            case "bt":
                                note = data.querySelector('tei-note[target="#' + id + '"]');
                                break;   

                            default:
                                note = data.querySelector('tei-note[target="#' + id + '"]');
                                break; 
                        }
                        
                        try 
                        {
                            document.getElementById('edition-notes').appendChild(note);
                        } 
                        catch (TypeError) 
                        {
                            // expected output: ReferenceError: nonExistentFunction is not defined
                            // Note - error messages will vary depending on browser
                        }
                    }
                });
            });


            var app = new annotator.App(); //This code starts the annotator app
            app.include(annotator.ui.main);
            app.include(annotator.storage.http);

            app.start().then(function () {
                app.annotations.load();
            });
        });

        //Variables for toggle buttons
        //The rest of this code is unchanged
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
                        this.innerHTML = `${this.innerHTML} <span class="number">${lineNum}</span>`;
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
        return (
            <Container>
                <TopBar />
                {/*  //This is old code from the older version of digital edition that wasn't working well, I believe this is for the search function but Yoseph wrote this
                <Row>
                    <Col>
                    {lineNum ? <Button variant='link' style={{ backgroundColor: "#5f0000", color: "white", margin: '15px' }} onClick={scrollToLine}>Scroll to line {lineNum}</Button> : <></>}
                    </Col>
                </Row>
                */}
                <Row className="row-eq-height justify-content-md-center">
                    <Col id="VIEWER">
                        <Viewer width="100%" height="80vh" background_color="#FFFFFF" iiifUrl={`https://iiif.wlu.edu/iiif/huon/${getViewerName()}.tif/info.json`} />
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