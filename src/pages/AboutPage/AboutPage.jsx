import "./AboutPage.css"
import { Container } from 'react-bootstrap'


const AboutPage = () => {
    return (
        <Container className="about-page">
            <div className="Bio">
                <h1>Bio</h1>
                <p>Rodrigo de Brujas (Talavera de la Reina 1993), lives and works in Madrid. In 2017, he obtained his degree in Fine Arts from the University of Salamanca. In 2019, he earned his Master's degree in Artistic Production from the University of Valencia.</p>
            </div>
            <div className="exhibitions">
                {/* space for exhibitons */}
            </div>
            <div className="portfolio">
                {/* create and upload your porfolio here so people can download it */}
            </div>
        </Container>
    )
}

export default AboutPage