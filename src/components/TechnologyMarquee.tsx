const technologyRows = [[
    { name: 'React', icon: '/images/technologies/react.svg' },
    { name: 'TypeScript', icon: '/images/technologies/typescript.svg' },
    { name: 'Firebase', icon: '/images/technologies/firebase.svg' },
    { name: 'Node.js', icon: '/images/technologies/nodejs.svg' },
    { name: 'Airtable', icon: '/images/technologies/airtable.svg' },
    { name: 'OpenPhone', icon: '/images/technologies/openphone.svg' },
    { name: 'HighLevel', icon: '/images/technologies/highlevel.svg' },
], [
    { name: 'JavaScript', icon: '/images/technologies/javascript.svg' },
    { name: 'Python', icon: '/images/technologies/python.svg' },
    { name: 'Git', icon: '/images/technologies/git.svg' },
    { name: 'GitHub', icon: '/images/technologies/github.svg' },
    { name: 'WordPress', icon: '/images/technologies/wordpress.svg' },
    { name: 'Cloudflare', icon: '/images/technologies/cloudflare.svg' },
    { name: 'Make', icon: '/images/technologies/make.svg' },
]]

function TechnologyGroup({ technologies, duplicate = false }: { technologies: typeof technologyRows[number], duplicate?: boolean }) {
    return (
        <ul className="technology-group" aria-hidden={duplicate || undefined}>
            {technologies.map((technology) => (
                <li className="technology-pill" key={technology.name}>
                    <img src={technology.icon} alt="" aria-hidden="true" />
                    <span>{technology.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default function TechnologyMarquee() {
    return (
        <section className="technology-section" aria-labelledby="technology-heading">
            <div className="container">
                <h2 id="technology-heading" className="technology-heading">Technologies I’ve worked with</h2>
            </div>
            <div className="technology-marquees">
                {technologyRows.map((technologies, index) => (
                    <div className={`technology-marquee${index === 1 ? ' technology-marquee-reverse' : ''}`} tabIndex={0} key={technologies[0].name}>
                        <div className="technology-track">
                            <TechnologyGroup technologies={technologies} />
                            <TechnologyGroup technologies={technologies} duplicate />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
