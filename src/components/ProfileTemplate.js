import "../stylesheets/ProfileTemplate.css"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
// import Card from "react-bootstrap/Card"
// import CardGroup from "react-bootstrap/CardGroup"
// import useModel from "../CustomHooks/useModels"
// import { Link } from 'react-router-dom'
// import ModelsList from "./ModelsList"



function ProfileTemplate({individualModel}) {
    

    return (
        <div>
            <Container>
                <Row id="profile-row" class="px-4 my-5">
                    <Col id="col-image" sm={7}>
                        <Image className="image-content" src={individualModel?.img}
                            fluid
                            rounded>
                        </Image>
                    </Col>
                    <Col id="col-info" sm={5}>
                        <h1 class="font-weight-light">{individualModel?.first_name} {individualModel?.last_name}</h1>
                        <p>Based-in: {individualModel?.based}</p>
                        <p>Height: {individualModel?.feet}ft {individualModel?.inches}ins</p>
                        <p>Agency: {individualModel?.agency}</p>
                        <p>Ethnicity: {individualModel?.ethnicity}</p>
                        <p>Work status: {individualModel?.work_status ? "Unavailable" : "Available"}</p>
                        {/* {ModelsList.status ? Ava : Un} */}

                    </Col>
                </Row>

                {/* <div id="line-container">
                    <div id="lines">
                        <div id="diamond"></div>
                    </div>
                </div> */}

                {/* <Row>
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
                </Row> */}

            </Container>
        </div>
    )
}

export default ProfileTemplate