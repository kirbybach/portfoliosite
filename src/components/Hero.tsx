import TypeWriter from './TypeWriter'

export default function Hero() {
    const heroTitles = [
        'Full-Stack Developer',
        'CLI Enthusiast',
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
            <div className="scroll-indicator animate-fade-up delay-4">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
