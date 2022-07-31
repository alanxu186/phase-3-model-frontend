import "../stylesheets/MenuBar.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container  from "react-bootstrap/Container"
import {Link} from "react-router-dom"


function MenuBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>FancyFrenchWord</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link as={Link} to={"/agencies"}>Agencies</Nav.Link>
                        <Nav.Link as={Link} to={"/models"}>Models</Nav.Link>
                        <Nav.Link as={Link} to={"/bookings"}>Bookings</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MenuBar