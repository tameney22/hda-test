//This is the code to generate the Nav bar for each page
//Inside App.js the <Navigation> tag adds the nav bar

import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { nav } from '../data/nav'
import logo from './huon-logo.png'
var name;

const Navigation = () => {
    name = localStorage.getItem("name");
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand href="/" >
                <img className="huon-logo-nav align-top" src={logo} alt="logo" />
                <h2 id="site-title">Huon d'Auvergne Digital Archive</h2>
                <p id="nav-subtitle">A digital edition and translation of Huon d'Auvergne, a pre-modern, Franco-Italian Epic</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav activeKey="/">
                    {nav.map((elem, index) => {
                        return (elem.dropdown ?
                            <NavDropdown key={index} title={elem.title} id="collasible-nav-dropdown">
                                {elem.dropdown.map((dropElem, ind) => <NavDropdown.Item key={ind} href={dropElem.url}>{dropElem.page}</NavDropdown.Item>)}
                            </NavDropdown>
                            : <Nav.Item key={index}>
                                <Nav.Link href={elem.url}>{elem.title}</Nav.Link>
                            </Nav.Item>)
                    })}
                    {name != null //This is the code that toggles wether it says sign in or shows your name
                    ? 
                        <NavDropdown title={name} id="collasible-nav-dropdown">
                            <Nav.Item>
                                <Nav.Link href={"/signoutbetween"}>Sign Out</Nav.Link>
                            </Nav.Item>     
                        </NavDropdown>
                    :
                        <Nav.Link href={"/signinbetween"}>Sign In</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation