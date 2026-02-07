import { useEffect } from 'react'
import { GithubIcon } from './Icons'

interface Project {
    title: string
    description: string
    features?: string[]
    tech: string[]
    icon: React.ReactNode
    github?: string
    featured?: boolean

    demo?: string
}

interface ProjectModalProps {
    project: Project | null
    onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (project) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [project, onClose])

    if (!project) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    ×
                </button>

                <div className="modal-body">
                    <div className="modal-header">
                        <div className="modal-icon">{project.icon}</div>
                        <div>
                            <h2 className="modal-title">{project.title}</h2>

                        </div>
                    </div>

                    <p className="modal-description">{project.description}</p>

                    {project.features && (
                        <div className="modal-features">
                            <h3>Key Features</h3>
                            <ul>
                                {project.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="modal-tech">
                        {project.tech.map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                        ))}
                    </div>

                    {/* Demo Media */}
                    {project.demo && (
                        <div className="modal-demo">
                            {project.demo.endsWith('.mp4') || project.demo.endsWith('.webm') ? (
                                <video src={project.demo} autoPlay loop muted playsInline />
                            ) : (
                                <img src={project.demo} alt={`${project.title} demo`} />
                            )}
                        </div>
                    )}

                    <div className="modal-actions">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener" className="btn btn-primary">
                                <GithubIcon /> View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
