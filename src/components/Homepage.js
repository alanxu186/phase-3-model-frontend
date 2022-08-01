import "../stylesheets/Homepage.css"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'


function Homepage() {
    return (
        <div>
            <Container>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100"
                            src="https://cdn.luxatic.com/wp-content/uploads/2017/09/Cara-Delevingne.jpg"
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Cara</h3>
                            <p>Model 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100"
                            src="https://cdn.luxatic.com/wp-content/uploads/2017/09/Cara-Delevingne.jpg"
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Cara</h3>
                            <p>Model 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Homepage