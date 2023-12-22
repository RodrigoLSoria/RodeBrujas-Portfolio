import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PaintingsPage from '../pages/PaintingsPage/PaintingsPage'
import PaperWorksPage from '../pages/PaperWorksPage/PaperWorksPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/paintings" element={<PaintingsPage />} />
            <Route path="/paper-works" element={<PaperWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes