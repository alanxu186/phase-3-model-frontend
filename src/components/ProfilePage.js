import "../stylesheets/ProfilePage.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { Button, Card, CardGroup } from "react-bootstrap"


function ProfilePage() {
    return (
        <div>
            <Container>
                <Row class="px-4 my-5">
                    <Col id="col-image" sm={7}>
                        <Image className="image-content" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/15/576a0793-7cdc-463e-9810-2721bf801751_f36f3ecf.jpg?itok=UIBqv1x1&v=1634270634"
                            fluid
                            rounded>
                        </Image>
                    </Col>
                    <Col sm={5}>
                        <h1 class="font-weight-light">Hoyeon Jung</h1>
                        <p>Role: Model</p>
                        <p>Based in: South Korea</p>
                        <p>Height: 175 cm</p>
                        <p>Agency: N/A</p>
                        <p>Ethnicity: South Korean</p>
                        <p>Work status: Some boolean idk man</p>
                        <Button variant="outline-dark">Book Model</Button>
                    </Col>
                </Row>
                <Row>
                    <Card id="break-card" class="text-center bg-secondary text-white">
                        <Card.Body>Insert some work or something idk</Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Col>
                        <CardGroup >
                            <Card>
                                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2021-10-09-at-8-58-09-am-1633795138.png?resize=640:*" />
                                <Card.Body>
                                    <Card.Title>LV Photoshoot</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://images.fashionmodeldirectory.com/images/shows/43358/43358-1333-88733-64527-single.jpg" />
                                <Card.Body>
                                    <Card.Title>FMD Photoshoot</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://i0.wp.com/uzomediatv.com/wp-content/uploads/2021/10/Jung-Ho-yeon-biography-age-net-worth-husband-family-movies-series-parents-Uzomedia-TV.jpg?fit=1024%2C1280&ssl=1" />
                                <Card.Body>
                                    <Card.Title>W Korea Photoshoot</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ProfilePage