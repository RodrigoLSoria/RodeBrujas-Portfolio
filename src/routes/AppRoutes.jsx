import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PaintingsPage from '../pages/PaintingsPage/PaintingsPage'
import PaperWorksPage from '../pages/PaperWorksPage/PaperWorksPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import WorkDetailsPage from '../pages/WorkDetailsPage/WorkDetailsPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/paintings" element={<PaintingsPage />} />
            <Route path="/paper-works" element={<PaperWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work/:paintingId" element={<WorkDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes