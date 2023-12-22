import "./HomePage.css"
import React from 'react'
import Painting from '../../components/Painting/Painting'
import * as Constants from '../../consts/consts'


const HomePage = () => {

    // shuffling log, it has issues when rendering images 
    //     const [shuffledPaintings, setShuffledPaintings] = useState([])

    //     const shuffleArray = (array) => {
    //         let m = array.length, t, i

    //         while (m) {
    //             i = Math.floor(Math.random() * m--)
    //             t = array[m]
    //             array[m] = array[i]
    //             array[i] = t
    //         }
    //         return array
    //     }

    //     useEffect(() => {
    //         setShuffledPaintings(shuffleArray([...Constants.PAINTINGS_DATA]))
    //     }, [])

    return (
        <>
            <div className="homepage-container">
                {Constants.PAINTINGS_DATA.map((painting) => (
                    <Painting key={painting.id} painting={painting} />
                ))}
            </div>
        </>
    )
}

export default HomePage
