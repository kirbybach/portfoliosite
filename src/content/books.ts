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
        title: 'Atomic Habits',
        author: 'James Clear',
        cover: '/images/atomic-habits-cover.jpg',
        status: 'finished',
        thoughts: 'Atomic Habits provides a highly effective and easy to use framework to construct healthy habits in your life. From exercise to academics, this is the most useful and applicable book I\’ve maybe ever read. Highly, highly recommend it!',
    },
    {
        title: 'The Almanack of Naval Ravikant',
        author: 'Eric Jorgenson',
        cover: '/images/navalmanack-cover.jpg',
        status: 'finished',
        thoughts: 'Listened to this one as an audiobook. I liked it, had some good wisdom, the part about happiness being present in the current moment.'
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        cover: '/images/project-hail-mary-cover.jpg',
        status: 'finished',
        thoughts: 'Read this before The Martian. What a great book. Super cool sci fi and just great characters.'
    },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        cover: '/images/the-martian-cover.jpg',
        status: 'finished',
        thoughts: 'Mark Watney is so tough. Super intense read, couldn\'t put it down.',
    },
    {
        title: 'Chatter',
        author: 'Ethan Kross',
        cover: '/images/chatter-cover.jpg',
        status: 'reading',
    },
    {
        title: 'Game of Thrones',
        author: 'George R.R. Martin',
        cover: '/images/game-of-thrones-cover.jpg',
        status: 'reading',
    },
    {
        title: 'Don\'t Believe Everything You Think: Why Your Thinking Is the Beginning & End of Suffering',
        author: 'Joseph Nguyen',
        cover: '/images/dont-believe-everything-you-thnk.jpg',
        status: 'reading',
    },
]
