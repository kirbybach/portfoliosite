import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BookShelf from '../components/BookShelf'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

export default function ReadingPage() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="content-page">
                <div className="content-header">
                    <div className="container">
                        <Link to="/more" className="back-link">← Back to More</Link>
                        <h1 className="content-header-title animate-fade-up">
                            <span className="gradient-text">Reading List</span>
                        </h1>
                        <p className="content-header-subtitle animate-fade-up">
                            Books I've read and what I thought about them.
                        </p>
                    </div>
                </div>
                <div className="container reading-container">
                    <BookShelf />
                </div>
            </main>
            <Footer />
        </>
    )
}
