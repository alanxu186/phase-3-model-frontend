import "../stylesheets/AboutPage.css"
// import Card from 'react-bootstrap/Card'

function AboutPage() {
    return (
        <div>
            <div id="jumbotron-container" class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal text-light">About Us</h1>
                    <p class="lead font-weight-normal text-light">At Rubine, our mission is to connect both agencies and models. Without agencies, there would be no models. Without models, there would be no agencies. Rubine strives to build a deep level of trust between both sides and wish to share the significance of modeling all around the world.</p>
                </div>
            </div>

            <div id="lower-about-me">
                <div class="bg-dark mr-md-3 pt-3 pt-md-5 px-md-4 text-center text-light overflow-hidden" id="lower-left">
                    <div class="my-5 py-5">
                        <h2 class="display-4 font-weight-normal" >Our Values</h2>
                        <p class="lead font-weight-normal">Beauty standards transcend physical appearances. Beauty is defined by one's ability to display confidence and acceptance of themelves.</p>
                    </div>
                </div>

                <div class="bg-light mr-md-3 pt-3 pt-md-5 px-md-4 text-center text-light overflow-hidden" id="lower-right">
                    <div class="my-5 py-5">
                        <h2 class="display-4 font-weight-normal">Our Goals</h2>
                        <p class="lead font-weight-normal">We strive to inspire and give every individual the opportunity to express their sense of self through modeling.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage