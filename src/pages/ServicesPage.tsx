import { useEffect, useState, type MouseEvent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import TechnologyMarquee from '../components/TechnologyMarquee'
import Contact from '../components/Contact'

const services = [
    {
        number: '01',
        title: 'Automation & Integrations',
        inquiryType: 'Automation & Integrations',
        description: 'I help businesses reduce repetitive work and connect the tools they already use.',
        examples: ['Google Sheets and Apps Script automation', 'Airtable, OpenPhone, and Make.com workflows', 'Third-party API integrations', 'Data syncing and recurring processes'],
    },
    {
        number: '02',
        title: 'Internal Tools & Web Development',
        inquiryType: 'Internal Tools & Web Development',
        description: 'I build lightweight software that supports real business operations.',
        examples: ['Internal dashboards and admin tools', 'React applications and Chrome extensions', 'Custom forms and operational workflows', 'Website improvements and API-connected tools'],
    },
    {
        number: '03',
        title: 'Application Reviews & Technical Assessments',
        inquiryType: 'Application Review & Technical Assessment',
        description: 'I review web applications for practical security, configuration, and reliability issues.',
        examples: ['Firebase and backend configuration reviews', 'Authentication and user data handling reviews', 'Common security and configuration issue checks', 'Prioritized findings and remediation guidance'],
    },
]

const selectedWork = [
    {
        title: 'Workflow Automation',
        problem: 'Staff manually moved information between communication and operations tools.',
        solution: 'I mapped the process and automated the handoffs with OpenPhone, Airtable, and Google Apps Script.',
        outcome: 'The workflow reduced recurring manual work by an estimated 5–10 hours.',
        technologies: ['OpenPhone', 'Airtable', 'Google Apps Script'],
    },
    {
        title: 'CRM Migration & Outreach System',
        problem: 'A cleaning business was moving client outreach into HighLevel while operational data, scheduling, and contractor availability still lived across Airtable and manual workflows.',
        solution: 'I built the HighLevel workflow, Make.com automations, custom Airtable scripts, API integrations, and a Chrome extension to connect outreach with day-to-day operations.',
        outcome: 'The business gained a connected CRM and outreach process with automated data handoffs plus live availability, booking-conflict, and service-zone checks inside HighLevel.',
        technologies: ['HighLevel', 'Make', 'Airtable', 'JavaScript', 'Chrome Extension'],
    },
    {
        title: 'Application Review',
        problem: 'A Firebase application needed clarity around authentication, configuration, backend behavior, and user-data handling.',
        solution: 'I reviewed the key flows and documented findings in priority order with recommended fixes.',
        outcome: 'The team received a prioritized remediation plan covering the most important issues first.',
        technologies: ['Firebase', 'Authentication', 'Application Review'],
    },
]

const processSteps = [
    { title: 'Map the workflow', description: 'We identify the current process, tools involved, points of friction, and the result you want to achieve.' },
    { title: 'Build and test', description: 'I implement the solution in small, reviewable steps and test the important workflows before finalizing it.' },
    { title: 'Document and hand off', description: 'I explain what changed, provide practical documentation, and outline any useful next steps.' },
]

export default function ServicesPage() {
    const [selectedInquiryType, setSelectedInquiryType] = useState<string>()

    const handleServiceInquiry = (event: MouseEvent<HTMLAnchorElement>, inquiryType: string) => {
        event.preventDefault()
        setSelectedInquiryType(inquiryType)
        window.history.replaceState(null, '', '#contact')
        window.requestAnimationFrame(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    }

    useEffect(() => {
        const previousTitle = document.title
        const metadata = [
            ['meta[name="description"]', 'Freelance software development, workflow automation, API integrations, internal tools, and technical application reviews for small businesses.'],
            ['meta[name="title"]', 'Freelance Software Services | Kirby Bach'],
            ['meta[property="og:title"]', 'Freelance Software Services | Kirby Bach'],
            ['meta[property="og:description"]', 'Practical software development, workflow automation, API integrations, internal tools, and technical application reviews for small businesses.'],
            ['meta[property="og:url"]', 'https://kirbybach.com/services'],
            ['meta[name="twitter:title"]', 'Freelance Software Services | Kirby Bach'],
            ['meta[name="twitter:description"]', 'Practical software development, automation, integrations, internal tools, and application reviews for small businesses.'],
            ['meta[name="twitter:url"]', 'https://kirbybach.com/services'],
        ] as const
        const previousMetadata = metadata.map(([selector, content]) => {
            const element = document.querySelector<HTMLMetaElement>(selector)
            const previousContent = element?.content
            if (element) element.content = content
            return { element, previousContent }
        })

        document.title = 'Freelance Software Services | Kirby Bach'

        return () => {
            document.title = previousTitle
            previousMetadata.forEach(({ element, previousContent }) => {
                if (element && previousContent) element.content = previousContent
            })
        }
    }, [])

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="services-page">
                <section className="services-hero">
                    <div className="container services-hero-content">
                        <div className="services-hero-main">
                            <p className="services-eyebrow animate-fade-up">Freelance software development by Kirby Bach</p>
                            <h1 className="services-hero-title animate-fade-up delay-1">I build practical software that helps small businesses run better.</h1>
                            <p className="services-hero-copy animate-fade-up delay-2">I automate repetitive work, connect business platforms, and build lightweight internal software.</p>
                            <div className="services-hero-actions animate-fade-up delay-3">
                                <a className="btn btn-primary" href="#contact">Discuss a Project</a>
                                <a className="services-text-link" href="#selected-work">See selected work <span aria-hidden="true">↓</span></a>
                            </div>
                        </div>
                    </div>
                </section>

                <TechnologyMarquee />

                <section className="section services-offerings" aria-labelledby="services-heading">
                    <div className="container">
                        <p className="services-eyebrow">What I can help with</p>
                        <h2 id="services-heading" className="section-title"><span className="gradient-text">Practical help for real business problems.</span></h2>
                        <div className="service-card-grid">
                            {services.map((service) => (
                                <article className="service-card glass-card" key={service.title}>
                                    <span className="service-number" aria-hidden="true">{service.number}</span>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ul>
                                        {service.examples.map((example) => <li key={example}>{example}</li>)}
                                    </ul>
                                    <a
                                        className="service-card-cta"
                                        href="#contact"
                                        onClick={(event) => handleServiceInquiry(event, service.inquiryType)}
                                    >
                                        Discuss this type of project <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="selected-work" className="section selected-work" aria-labelledby="selected-work-heading">
                    <div className="container">
                        <p className="services-eyebrow">Selected Results</p>
                        <h2 id="selected-work-heading" className="section-title"><span className="gradient-text">Selected Work</span></h2>
                        <div className="selected-work-list">
                            {selectedWork.map((work, index) => (
                                <article className="selected-work-item" key={work.title}>
                                    <span className="selected-work-number" aria-hidden="true">0{index + 1}</span>
                                    <div>
                                        <h3>{work.title}</h3>
                                        <dl className="selected-work-story">
                                            <div><dt>Problem</dt><dd>{work.problem}</dd></div>
                                            <div><dt>Solution</dt><dd>{work.solution}</dd></div>
                                            <div><dt>Outcome</dt><dd>{work.outcome}</dd></div>
                                        </dl>
                                        <div className="selected-work-tags" aria-label="Technologies used">
                                            {work.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section work-process" aria-labelledby="process-heading">
                    <div className="container">
                        <p className="services-eyebrow">A straightforward process</p>
                        <h2 id="process-heading" className="section-title"><span className="gradient-text">How I Work</span></h2>
                        <ol className="process-grid">
                            {processSteps.map((step, index) => (
                                <li className="process-step" key={step.title}>
                                    <span className="process-number">{index + 1}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <Contact
                    key={selectedInquiryType ?? 'general-inquiry'}
                    className="services-contact"
                    eyebrow="Let’s make it useful"
                    title="Have a project in mind?"
                    intro="Tell me what you’re trying to improve. A few sentences is plenty to get the conversation started."
                    helperText="Helpful details: your current workflow, tools involved, desired outcome, and timeline."
                    availability="Available for focused reviews, workflow improvements, and small software builds."
                    initialProjectType={selectedInquiryType}
                    projectInquiry
                />
            </main>
            <Footer />
        </>
    )
}
