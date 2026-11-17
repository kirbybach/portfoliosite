import TypeWriter from './TypeWriter'
import { MailIcon } from './Icons'

export default function Hero() {
    const heroTitles = [
        'Full-Stack Developer',
        'OpenAI Campus Lead',
        'President of CS4Good',
        'CLI Enthusiast',
        'Rec League Hooper',
        'John Mayer Enjoyer',
        'Builder of Cool Things'
    ]

    return (
        <section id="hero" className="hero">
            {/* Background removed for sketch style */}
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting animate-fade-up">Hi, I'm</p>
                    <h1 className="hero-name animate-fade-up delay-1">
                        <span className="gradient-text">Kirby Bach</span>
                    </h1>
                    <p className="hero-tagline animate-fade-up delay-2">
                        CS Student @ Notre Dame • <TypeWriter phrases={heroTitles} />
                    </p>
                    <div className="hero-cta animate-fade-up delay-3">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                        <a
                            href="/resume.pdf"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            📄 Resume
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper animate-fade-up delay-2">
                    <div className="hero-image-glow"></div>
                    <div className="stick-figure" aria-hidden="true">
                        <svg width="80" height="90" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
                            {/* Head */}
                            <circle cx="40" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="4" />
                            <g className="santa-hat" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round">
                                <path fill="#d94640" d="M24 9 Q26 -4 37 -16 Q43 -23 51 -18 Q60 -14 62 -3 L63 1 Q58 -7 51 -8 Q50 -1 55 9 Z" />
                                <path d="M48 -13 Q50 -11 51 -8" fill="none" strokeWidth="1.6" />
                                <path fill="#fffaf0" d="M23 6 Q36 2 52 4 Q57 4 57 9 Q58 13 53 13 Q38 11 25 15 Q21 15 21 11 Q20 8 23 6 Z" />
                                <path fill="#fffaf0" d="M62 -4 Q66 -5 67 -2 Q71 0 68 4 Q66 8 62 6 Q58 7 57 3 Q55 0 58 -2 Q59 -5 62 -4 Z" />
                            </g>
                            {/* Body */}
                            <line x1="40" y1="35" x2="40" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            {/* Left Arm (Waving) */}
                            <line x1="40" y1="55" x2="15" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="waving-arm-left" />
                            {/* Right Arm (Waving) */}
                            <line x1="40" y1="55" x2="65" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="waving-arm-right" />
                        </svg>
                    </div>
                    <img
                        src="/images/kirby-photo.jpg"
                        alt="Kirby Bach"
                        className="hero-image"
                    />
                </div>
            </div>
            <div className="hero-newsletter-note-slot animate-fade-up delay-3">
                <a
                    href="https://getlaunchletter.beehiiv.com/"
                    className="hero-newsletter-note"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read The Launch Letter newsletter"
                >
                    <span className="hero-newsletter-paper-shadow" aria-hidden="true">
                        <span className="hero-newsletter-paper"></span>
                    </span>
                    <span className="hero-newsletter-copy">
                        <span>Psst...</span>
                        <span>Read my</span>
                        <span>newsletter! →</span>
                    </span>
                    <span className="hero-newsletter-icon" aria-hidden="true">
                        <MailIcon />
                    </span>
                    <span className="hero-note-peel" aria-hidden="true">
                        <span className="hero-note-peel-back"></span>
                    </span>
                </a>
            </div>
            <div className="scroll-indicator animate-fade-up delay-4">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
