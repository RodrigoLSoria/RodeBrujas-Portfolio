import "./Painting.css"


const Painting = ({ painting }) => {
    return (

        <div className="painting">
            <img src={painting.image} alt={painting.title} />
            <div className="painting-details">
                <p>{painting.title}, </p>
                <p>{painting.year}, </p>
                <p>{painting.technique}, </p>
                <p>{painting.size} </p>

            </div>
        </div>
    )
}

export default Painting

