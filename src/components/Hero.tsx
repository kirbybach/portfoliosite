import TypeWriter from './TypeWriter'

export default function Hero() {
    const heroTitles = [
        'Full-Stack Developer',
        'CLI Enthusiast',
        'Builder of Cool Things'
    ]

    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
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
