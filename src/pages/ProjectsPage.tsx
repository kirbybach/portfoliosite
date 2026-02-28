import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

export default function ProjectsPage() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="content-page">
                <div className="content-header">
                    <div className="container">
                        <Link to="/more" className="back-link">← Back to More</Link>
                        <h1 className="content-header-title animate-fade-up">
                            <span className="gradient-text">Project Writeups</span>
                        </h1>
                        <p className="content-header-subtitle animate-fade-up">
                            Deep dives into what I'm building and lessons learned.
                        </p>
                    </div>
                </div>
                <div className="container stub-container">
                    <div className="stub-card glass-card">
                        <span className="stub-icon">🚧</span>
                        <h2 className="stub-title">Under Construction</h2>
                        <p className="stub-text">
                            I'm still putting this together — check back later for writeups on what I'm building!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
