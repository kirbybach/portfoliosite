const techStack = [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
]

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">About Me</span>
                </h2>
                <div className="about-content">
                    <div className="about-text glass-card">
                        <p className="about-intro">
                            I'm a <strong>Computer Science student at the University of Notre Dame</strong> (Class of 2028)
                            with a passion for building software that solves real problems.
                        </p>
                        <p>
                            From developing high-performance CLIs to engineering automation workflows that save hours of manual work,
                            I love diving deep into challenging problems and emerging with elegant solutions.
                        </p>
                        <p>
                            Currently serving as <strong>President of CS For Good</strong>, where I lead student teams
                            in developing software solutions for local non-profits.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">3.77</span>
                                <span className="stat-label">GPA</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">2028</span>
                                <span className="stat-label">Graduation</span>
                            </div>
                        </div>
                    </div>
                    <div className="tech-stack glass-card">
                        <h3>Tech Stack</h3>
                        <div className="tech-grid">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="tech-item">
                                    <img src={tech.icon} alt={tech.name} />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
