import "../stylesheets/ProfileTemplate.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"



function ProfileTemplate() {
    return (
        <div>
            <Container>
                <Row id="profile-row" class="px-4 my-5">
                    <Col id="col-image" sm={7}>
                        <Image className="image-content" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/15/576a0793-7cdc-463e-9810-2721bf801751_f36f3ecf.jpg?itok=UIBqv1x1&v=1634270634"
                            fluid
                            rounded>
                        </Image>
                    </Col>
                    <Col id="col-info" sm={5}>
                        <h1 class="font-weight-light">Hoyeon Jung</h1>
                        <p>Based-in: South Korea</p>
                        <p>Height: 175 cm</p>
                        <p>Agency: N/A</p>
                        <p>Ethnicity: South Korean</p>
                        <p>Work status: Some boolean idk man</p>
                        <button className="book-button">Book Model</button>
                    </Col>
                </Row>

                <div id="line-container">
                    <div id="lines">
                        <div id="diamond"></div>
                    </div>
                </div>

                <Row>
                    <Col>
                        <CardGroup >
                            <Card>
                                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2021-10-09-at-8-58-09-am-1633795138.png?resize=640:*" />

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://images.fashionmodeldirectory.com/images/shows/43358/43358-1333-88733-64527-single.jpg" />
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://i.mdel.net/i/db/2021/10/1588499/1588499-800w.jpg" />
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ProfileTemplate