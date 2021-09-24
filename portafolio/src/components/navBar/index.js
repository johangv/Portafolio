import React from 'react';
import '../../styles/navBar.css';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar(){
    return <div className = "container-fluid j-navBar-content">
        <div className = "container">
            <Navbar bg = "myBackground" variant = "dark"
            sticky="top" expand = "lg" collapseOnSelect>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href = "#about-me">Sobre mí</Nav.Link>
                        <Nav.Link href = "#resume">Resumen</Nav.Link>
                        <Nav.Link href = "#proyects">Proyectos</Nav.Link>
                        <Nav.Link href = "#contact-me">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
};

export default NavBar;