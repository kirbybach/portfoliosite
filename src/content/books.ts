export interface Book {
    title: string
    author: string
    cover: string
    status: 'reading' | 'finished' | 'want-to-read'
    link?: string
    thoughts?: string
}

export const books: Book[] = [
    {
        title: 'Chatter',
        author: 'Ethan Kross',
        cover: '/images/chatter-cover.jpg',
        status: 'reading',
    },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        cover: '/images/the-martian-cover.jpg',
        status: 'finished',
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        cover: '/images/project-hail-mary-cover.jpg',
        status: 'finished',
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        cover: '/images/atomic-habits-cover.jpg',
        status: 'finished',
    },
    {
        title: 'The Almanack of Naval Ravikant',
        author: 'Eric Jorgenson',
        cover: '/images/navalmanack-cover.jpg',
        status: 'finished',
    },
]
