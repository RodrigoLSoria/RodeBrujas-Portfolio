import React from 'react'
import "./PaintingsPage.css"
import Painting from "../../components/Painting/Painting"
import * as Constants from "../../consts/consts"
import { Col, Row, Container } from 'react-bootstrap'


const PaintingsPage = () => {
    const oilPaintings = Constants.PAINTINGS_DATA
        .filter(painting => painting.category === 'painting')
        .sort((a, b) => b.year - a.year)


    const paintingsByYear = oilPaintings.reduce((acc, painting) => {
        const { year } = painting
        if (!acc[year]) {
            acc[year] = []
        }
        acc[year].push(painting)
        return acc
    }, {})

    const sortedYears = Object.keys(paintingsByYear).sort((a, b) => b - a)

    return (
        <Container className='paintings-container'>
            <h1>Oil Paintings</h1>
            {sortedYears.map(year => (
                <div key={year}>
                    <h2>{year}</h2>
                    <Row>
                        {paintingsByYear[year].map((painting) => (
                            <Col lg={4} key={painting.id}>
                                <Painting painting={painting} />
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Container>
    )
}

export default PaintingsPage
