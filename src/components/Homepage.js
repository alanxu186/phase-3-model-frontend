import "../stylesheets/Homepage.css"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Homepage() {
    return (
        <div>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Interview with Model 102</Card.Title>
                        <Card.Text>Model 102 talks about bridging Western and Eastern Fashion.</Card.Text>
                        <Button variant="primary">This button don't work man</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Something End</Card.Footer>
                </Card>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"
                            src="https://images.hdqwalls.com/download/new-cara-delevingne-2020-ll-1336x768.jpg"
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Cara Delevingne</h3>
                            <p>Model 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"
                            src="https://images.hdqwalls.com/download/chris-evans-for-esquire-2020-0v-1336x768.jpg"
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h3>Chris Evans</h3>
                            <p>Model 2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"
                            src="https://images.hdqwalls.com/download/kim-kardashian-and-kylie-jenner-2019-4k-cw-1336x768.jpg"
                            alt="third slide"
                        />
                        <Carousel.Caption>
                            <h3>Kardashians</h3>
                            <p>Model 3</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Homepage