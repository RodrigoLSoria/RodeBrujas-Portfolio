import React from 'react'
import { useParams } from 'react-router-dom'
import * as Constants from '../../consts/consts'
import './WorkDetailsPage.css'
import { Magnifier } from "react-image-magnifiers"


const WorkDetailsPage = () => {
    const { paintingId } = useParams()
    const painting = Constants.PAINTINGS_DATA.find(p => p.id === parseInt(paintingId))

    if (!painting) {
        return <div>Painting not found</div>
    }

    return (
        <div className='work-details-page'>
            <img src={painting.image} alt={painting.title} style={{ maxWidth: '100%' }} />
            {/* <Magnifier
                imageSrc={painting.image}
                imageAlt={painting.title}
                style={{ width: '100%' }}
            /> */}
            <div className="work-info">
                <h3>"{painting.title}"</h3>
                <p><strong>Technique:</strong> {painting.technique}</p>
                <p><strong>Year:</strong> {painting.year}</p>
                <p><strong>Size:</strong> {painting.size}</p>
            </div>
        </div>
    )
}

export default WorkDetailsPage
