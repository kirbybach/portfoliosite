import Navbar from '../components/Navbar'
import HubCard from '../components/HubCard'
import NewsletterCard from '../components/NewsletterCard'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import { books } from '../content/books'
import type { Book } from '../content/books'

const previewStatusOrder: Book['status'][] = ['reading', 'finished', 'shelved', 'want-to-read']

export default function MorePage() {
    const previewBooks = [...books]
        .reverse()
        .sort((a, b) => previewStatusOrder.indexOf(a.status) - previewStatusOrder.indexOf(b.status))

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="content-page more-page">
                <div className="content-header">
                    <div className="container">
                        <h1 className="content-header-title animate-fade-up">
                            <span className="gradient-text">More</span>
                        </h1>
                        <p className="content-header-subtitle animate-fade-up">
                            What I'm reading and thinking about.
                        </p>
                    </div>
                </div>
                <div className="hub-grid container">
                    <HubCard
                        title="Reading List"
                        icon="📚"
                        description="Books I've read and what I thought about them."
                        linkTo="/reading"
                        linkLabel="Browse the bookshelf →"
                    >
                        <div className="hub-preview-covers">
                            {previewBooks.slice(0, 7).map((book) => (
                                <img
                                    key={book.title}
                                    src={book.cover}
                                    alt={book.title}
                                    className="hub-mini-cover"
                                    title={book.title}
                                />
                            ))}
                            {books.length > 7 && (
                                <div className="hub-mini-cover-more">
                                    <span>+{books.length - 7}</span>
                                </div>
                            )}
                        </div>
                    </HubCard>
                    <NewsletterCard />
                </div>
            </main>
            <Footer />
        </>
    )
}
