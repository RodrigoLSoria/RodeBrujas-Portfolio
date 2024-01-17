import { Link } from "react-router-dom"
import "./Painting.css"


const Painting = ({ painting }) => {
    return (

        <div className="painting">
            <Link to={`/work/${painting.id}`}>
                <img src={painting.image} alt={painting.title} />
                <div className="painting-details">
                    <p>{painting.title}, </p>
                    <p>{painting.year}, </p>
                    <p>{painting.technique}, </p>
                    <p>{painting.size} </p>
                </div>
            </Link>
        </div>
    )
}

export default Painting

