import "../stylesheets/AboutPage.css"
import Card from 'react-bootstrap/Card'

function AboutPage() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                        Bootstrap is wack but im still gonna use it for this project
                    </Card.Text>
                </Card.Body>
                <Card.Img class="rounded-0" variant="top" src="https://assets.vogue.com/photos/5d937cca0771d900089db818/master/w_2560%2Cc_limit/RD1203.Zawe%2520Ashton%2C%2520Charlie%2520Cox%2C%2520and%2520Tom%2520Hiddleston%2520in%2520BETRAYAL%2520at%2520London's%2520Harold%2520Pinter%2520Theatre%2520(photo%2520by%2520Marc%2520Brenner).jpg" />
            </Card>
        </div>
    )
}

export default AboutPage