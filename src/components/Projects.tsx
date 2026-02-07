import { useState } from 'react'
import { TerminalIcon, BoxIcon, ChromeIcon, GithubIcon, MessageCircleIcon, BirdIcon } from './Icons'
import ProjectModal from './ProjectModal'

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

const projects: Project[] = [
    {
        title: 'WorkflowyCLI',
        description: 'High-performance CLI for Workflowy in TypeScript featuring a custom interactive REPL with Unix-style commands (ls, cd, tree) and an optimistic state sync engine that eliminates API latency.',
        features: ['Custom interactive REPL with Unix-style commands', 'Optimistic state synchronization engine', 'Fuzzy tab-autocompletion & recursive path resolution'],
        tech: ['TypeScript', 'Node.js', 'CLI'],
        icon: <TerminalIcon />,
        github: 'https://github.com/kirbybach/workflowycli',
        featured: true,
        demo: '/demos/wf2.gif', // Add your GIF here
    },
    {
        title: 'DysbTrack',
        description: 'WhatsApp productivity bot for accountability groups. Members commit tasks via commands, and an AI grades commits based on effort and specificity. Features goal tracking, disputes, and daily cron summaries.',
        features: ['AI-powered commit grading with OpenAI', 'WhatsApp integration via Baileys', 'Goal tracking, disputes & undo system'],
        tech: ['TypeScript', 'WhatsApp API', 'Supabase', 'OpenAI'],
        icon: <MessageCircleIcon />,
        featured: true,

        demo: '/demos/dysbtrackdemo.gif', // Add your GIF here
    },
    {
        title: 'Tweet Generator CLI',
        description: 'AI-powered CLI that turns files, URLs, or YouTube videos into engaging tweets. Features interactive refinement, style learning to clone your voice, and support for local LLMs via Ollama.',
        features: ['Source agnostic: files, URLs, YouTube transcripts', 'Style Mirror persona learning with verification', 'Interactive co-pilot with visual diffs'],
        tech: ['TypeScript', 'OpenAI', 'Ollama', 'CLI'],
        icon: <BirdIcon />,
        github: 'https://github.com/kirbybach/tweet-gen',
        featured: true,
        demo: '/demos/tweetgendemo.gif', // Add your GIF here
    },
    {
        title: 'BK Dispatcher',
        description: 'Chrome extension for real-time contractor dispatching, built for a Go High Level CRM migration. Queries Airtable APIs to check availability against live booking schedules and zone coverage.',
        features: ['Real-time contractor availability & conflict detection', 'Airtable API integration with zone-based matching', 'Built for Go High Level CRM migration'],
        tech: ['TypeScript', 'Chrome Extension', 'Airtable API'],
        icon: <ChromeIcon />,
        featured: true,
    },
    {
        title: 'AI Sales Call Analyzer',
        description: 'AWS-powered tool using Lambda and SQS to reliably process and analyze client call transcripts with LLMs for actionable sales feedback.',
        tech: ['AWS Lambda', 'SQS', 'LLM'],
        icon: <BoxIcon />,
    },
    {
        title: 'AI Communication Extension',
        description: 'JavaScript Chrome extension integrating OpenAI and OpenPhone APIs, enabling AI-powered communication workflows directly within the browser.',
        tech: ['JavaScript', 'Chrome Extension', 'OpenAI'],
        icon: <ChromeIcon />,
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title"><span className="gradient-text">Featured Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-links">

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener"
                                            aria-label="GitHub"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <GithubIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            {project.features && (
                                <ul className="project-features">
                                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            )}
                            <div className="project-tech">
                                {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                            </div>

                            {/* View Details indicator */}
                            <div className="project-view-hint">
                                <span>Click to view details</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}
