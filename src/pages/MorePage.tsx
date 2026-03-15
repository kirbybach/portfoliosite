import Navbar from '../components/Navbar'
import HubCard from '../components/HubCard'
import NewsletterCard from '../components/NewsletterCard'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import { books } from '../content/books'

export default function MorePage() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="content-page">
                <div className="content-header">
                    <div className="container">
                        <h1 className="content-header-title animate-fade-up">
                            <span className="gradient-text">More</span>
                        </h1>
                        <p className="content-header-subtitle animate-fade-up">
                            A collection of what I'm reading and building.
                        </p>
                    </div>
                </div>
                <div className="hub-grid container">
                    <HubCard
                        title="Reading List"
                        icon="📚"
                        description="Books I've read and what I thought about them."
                        linkTo="/reading"
                    >
                        <div className="hub-preview-covers">
                            {books.slice(0, 4).map((book) => (
                                <img
                                    key={book.title}
                                    src={book.cover}
                                    alt={book.title}
                                    className="hub-mini-cover"
                                    title={book.title}
                                />
                            ))}
                            {books.length > 4 && (
                                <div className="hub-mini-cover-more">
                                    <span>+{books.length - 4}</span>
                                </div>
                            )}
                        </div>
                    </HubCard>
                    <HubCard
                        title="Project Writeups"
                        icon="🛠"
                        description="Deep dives into what I'm building and lessons learned."
                        linkTo="/projects"
                        disabled
                    >
                        <p className="hub-preview-text">🚧 Under construction</p>
                    </HubCard>
                    <NewsletterCard />
                </div>
            </main>
            <Footer />
        </>
    )
}
