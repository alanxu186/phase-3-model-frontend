import "../stylesheets/Footer.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Footer () {
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                        Copyright Celestino and Alan &copy; Model
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer