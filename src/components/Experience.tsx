const experiences = [
    {
        date: 'August 2026 – Present',
        title: 'Campus Lead',
        company: 'OpenAI • Notre Dame, Indiana',
        url: 'https://openai.com/',
        logo: '/images/openai-logo.svg',
        logoAlt: 'OpenAI logo',
        details: [
            'Serve as a Campus Lead for the OpenAI Student Collective, working to ensure that AI benefits students at the University of Notre Dame',
            'Host workshops, studio hours, and other opportunities for students to explore, learn, and build with ChatGPT and OpenAI tools',
            'Help students move beyond simply using AI to think critically and creatively about what they can build with it',
        ],
    },
    {
        date: 'May 2026 – August 2026',
        title: 'Application Developer Intern',
        company: 'Kahua • Alpharetta, Georgia',
        url: 'https://kahua.com',
        logo: '/images/kahua-logo.png',
        logoAlt: 'Kahua logo',
        details: [
            'Won Best Presentation award at an internal hackathon for building a React app that used the Kahua API to capture asset photos, populate records, and support inspection workflows',
            "Developed automated unit tests in C# using .NET for Kahua's WinUI platform, expanding validation of core desktop workflows and improving regression coverage",
            "Built and configured an XML-based application for a customer, translating business requirements into a tailored workflow within Kahua's construction project management platform",
        ],
    },
    {
        date: 'January 2026 – Present',
        title: 'President',
        company: 'CS For Good Club • Notre Dame, Indiana',
        url: 'https://sites.nd.edu/cs4good/',
        logo: '/images/cs4good-text-logo.png',
        logoAlt: 'CS For Good logo',
        details: [
            'Led a 75-member student organization dedicated to developing software solutions for local nonprofits',
            'Oversaw 7+ technical projects, bridging client requirements with student development teams',
            'Led communications with community partners to define project scope and ensure successful deployment',
        ],
    },
    {
        date: 'May 2025 – May 2026',
        title: 'Software Intern',
        company: 'Rover House Cleaners • Dallas, Texas',
        details: [
            'Designed and deployed an automation workflow to reduce manual data entry and client communication time by 5-10 hours weekly using the OpenPhone and Airtable APIs and Google Apps Script',
            'Engineered a JavaScript Chrome extension that integrates the OpenAI and OpenPhone APIs, enabling AI-powered communication workflows directly within the browser',
            'Fixed critical PHP security vulnerabilities that placed the personal information of more than 1,000 customers at risk',
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
                            <div className="timeline-header">
                                <div>
                                    <div className="timeline-date">{exp.date}</div>
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <p className="timeline-company">
                                        {exp.url ? (
                                            <a href={exp.url} target="_blank" rel="noreferrer">{exp.company}</a>
                                        ) : exp.company}
                                    </p>
                                </div>
                                {exp.logo && (
                                    <a href={exp.url} target="_blank" rel="noreferrer" className="timeline-logo-link" aria-label={`Visit ${exp.company}`}>
                                        <img
                                            className="timeline-logo"
                                            src={exp.logo}
                                            alt={exp.logoAlt}
                                        />
                                    </a>
                                )}
                            </div>
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
