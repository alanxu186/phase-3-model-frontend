import "../stylesheets/MenuBar.css"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

function MenuBar() {

    const [search, setSearch] = useState("")

    function handleFormSubmit(e) {
        e.preventDefault()

    }

    return (
        <div>
            <Navbar id="navbar-container" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand as={Link} to={"/"}><h1>Rubine</h1></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/models"}>Models</Nav.Link>
                            <Nav.Link as={Link} to={"/bookings"}>Bookings</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex" onSubmit={handleFormSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                required
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </Form> */}
                        <Nav>
                            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MenuBar