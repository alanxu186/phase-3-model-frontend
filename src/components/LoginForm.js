import "../stylesheets/LoginForm.css"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function LoginForm() {
    return (
        <div>
            <Container class="d-flex justify-content-center">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="icon" />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="md" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm