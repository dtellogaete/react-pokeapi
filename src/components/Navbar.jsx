import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container, Nav} from 'react-bootstrap';

import { NavLink } from "react-router-dom";

export const NavbarComp = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "text-warning" : "text-light");

    return (
        <>       
        <Navbar bg="danger" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link  className="text-light">
                <NavLink className={ setActiveClass } to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}><h4>Home</h4></NavLink>
                </Nav.Link>
                <Nav.Link  className="text-light">
                <h4>|</h4>
                </Nav.Link>
                <Nav.Link className="text-light">
                <NavLink className={ setActiveClass } to="/pokemones" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    <h4>Pokemones </h4>
                </NavLink>                    
                </Nav.Link>
            </Nav>            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavbarComp;