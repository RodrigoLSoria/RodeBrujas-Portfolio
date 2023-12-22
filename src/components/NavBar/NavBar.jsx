import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const Navbar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    return (
        <nav>
            <div className="rodebrujasLogo">
                <img src="https://res.cloudinary.com/depxadgb3/image/upload/v1703242758/rdb-blue_neihey.png" alt="Rodrigo de Brujas Signature" />
            </div>
            <div className="navLinks">
                {!isHomePage && <Link to="/" style={{ color: 'black' }}>HOME</Link>}
                <Link to="/paintings" className={isHomePage ? 'home-link' : 'other-link'}>PAINTINGS</Link>
                <Link to="/paper-works" className={isHomePage ? 'home-link' : 'other-link'}>PAPER WORKS</Link>
                <Link to="/about" className={isHomePage ? 'home-link' : 'other-link'}>ABOUT</Link>
                <Link to="/contact" className={isHomePage ? 'home-link' : 'other-link'}>CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar
