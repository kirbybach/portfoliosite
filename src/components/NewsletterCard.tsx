import HubCard from './HubCard'

export default function NewsletterCard() {
    return (
        <HubCard
            title="Newsletter"
            icon="🚀"
            description="A little more of what’s on my mind."
            href="https://getlaunchletter.beehiiv.com/"
            linkLabel="Read & subscribe →"
        >
            <div className="newsletter-preview">
                <span className="newsletter-preview-label">A note from Kirby</span>
                <span className="newsletter-preview-title">The Launch Letter</span>
                <span className="newsletter-preview-detail">Read an issue. Stick around for the next.</span>
            </div>
        </HubCard>
    )
}
