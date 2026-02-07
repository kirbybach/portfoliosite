const experiences = [
    {
        date: 'May 2025 – Present',
        title: 'Software Intern',
        company: 'Rover House Cleaners • Dallas, TX',
        details: [
            'Spearheaded the adoption of GoHighLevel to streamline Virtual Assistant communication, architecting a bi-directional sync with Airtable that unifies disparate lead sources and reduces manual entry',
            'Built automation workflows saving 5-10 hours weekly using OpenPhone & Airtable APIs',
            'Developed Chrome extension with OpenAI integration for AI-powered communication',
            'Built AWS-based AI sales call feedback tool with Lambda & SQS',
            'Fixed critical PHP security vulnerabilities protecting 1000+ customers',
        ],
    },
    {
        date: 'Apr 2025 – Present',
        title: 'Freelance Web Developer',
        company: 'Self-Employed • Portage, MI',
        details: [
            "Developed custom JavaScript ordering system for Sean's Table (Chicago personal chef)",
            'Created website for Legionarios Con Jose Luis Estela (Fox Deportes, 1M+ viewers)',
            'Increased user engagement by 30% and reduced ordering clicks by 20%',
        ],
    },
    {
        date: 'Jan 2026 – Present',
        title: 'President',
        company: 'CS For Good Club • Notre Dame',
        details: [
            'Lead student organization developing software solutions for local non-profits',
            'Oversee multiple technical projects bridging clients with student teams',
            'Manage communications with community partners for successful deployments',
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title"><span className="gradient-text">Experience</span></h2>
                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="timeline-item glass-card">
                            <div className="timeline-date">{exp.date}</div>
                            <h3 className="timeline-title">{exp.title}</h3>
                            <p className="timeline-company">{exp.company}</p>
                            <ul className="timeline-details">
                                {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
