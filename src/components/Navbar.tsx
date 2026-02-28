import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isMoreSection = location.pathname === '/more' || location.pathname === '/reading' || location.pathname === '/projects'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => setIsOpen(false)

    return (
        <nav className="navbar" style={{ background: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.8)' }}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">KB</Link>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {isHome ? (
                        <>
                            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                            <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        </>
                    )}
                    <li>
                        <Link
                            to="/more"
                            onClick={handleLinkClick}
                            className={isMoreSection ? 'nav-active' : ''}
                        >
                            More
                        </Link>
                    </li>
                </ul>
                <button className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
