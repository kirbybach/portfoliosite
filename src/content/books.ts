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
        thoughts: 'Mark Watney is so tough. Super intense read, couldn\'t put it down.',
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        cover: '/images/project-hail-mary-cover.jpg',
        status: 'finished',
        thoughts: 'Read this before The Martian. What a great book. Super cool sci fi and just great characters.'
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        cover: '/images/atomic-habits-cover.jpg',
        status: 'finished',
        thoughts: 'Probably the most impactful book I\'ve read, super practical and applicable to life.',
    },
    {
        title: 'The Almanack of Naval Ravikant',
        author: 'Eric Jorgenson',
        cover: '/images/navalmanack-cover.jpg',
        status: 'finished',
        thoughts: 'Listened to this one as an audiobook. I liked it, had some good wisdom, the part about being present especially.'
    },
]
