import { books } from '../content/books'
import type { Book } from '../content/books'

const statusLabel: Record<Book['status'], string> = {
    'reading': '📖 Reading',
    'finished': '✓ Finished',
    'want-to-read': '📋 Up Next',
}

const statusClass: Record<Book['status'], string> = {
    'reading': 'status-reading',
    'finished': 'status-finished',
    'want-to-read': 'status-next',
}

const statusOrder: Book['status'][] = ['reading', 'finished', 'want-to-read']

function groupByStatus(bookList: Book[]) {
    const groups: Partial<Record<Book['status'], Book[]>> = {}
    for (const book of bookList) {
        if (!groups[book.status]) groups[book.status] = []
        groups[book.status]!.push(book)
    }
    return groups
}

const groupTitles: Record<Book['status'], string> = {
    'reading': 'Currently Reading',
    'finished': 'Finished',
    'want-to-read': 'Up Next',
}

export default function BookShelf() {
    const groups = groupByStatus([...books].reverse())

    return (
        <section className="bookshelf-section">
            {statusOrder.map((status) => {
                const group = groups[status]
                if (!group || group.length === 0) return null
                return (
                    <div key={status} className="bookshelf-group">
                        <h3 className="bookshelf-group-title">{groupTitles[status]}</h3>
                        <div className="sketchy-shelf-container">
                            <div className="bookshelf">
                                {group.map((book) => (
                                    <div key={book.title} className="book-card glass-card">
                                        <div className="book-cover-wrapper">
                                            <img
                                                src={book.cover}
                                                alt={book.title}
                                                className="book-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="book-info">
                                            <span className={`book-status-badge ${statusClass[book.status]}`}>
                                                {statusLabel[book.status]}
                                            </span>
                                            <h4 className="book-title">{book.title}</h4>
                                            <p className="book-author">{book.author}</p>
                                            {book.thoughts && (
                                                <p className="book-thoughts">{book.thoughts}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="shelf-line"></div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
