import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/landing-page'
import Footer from './components/landing-page/footer'
import Navbar from './components/landing-page/navbar'
import SolutionsPage from './pages/solutions-page'
import PasswordCachePage from './pages/password-cache-page'
import AboutPage from './pages/about-page'
import ProjectsPage from './pages/projects-page'
import CareersPage from './pages/career-page'
import ContactPage from './pages/contact-page'
import ApplyPage from './pages/apply-page'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/password-cache" element={<PasswordCachePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/careers" element={<CareersPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
