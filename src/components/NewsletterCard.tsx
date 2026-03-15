import HubCard from './HubCard'

export default function NewsletterCard() {
    return (
        <HubCard
            title="Newsletter"
            icon="🚀"
            description="Subscribe to Launch Letter for updates on startups and the college experience."
            isDoubleWidth
        >
            <div className="newsletter-embed-container">
                <iframe
                    src="https://subscribe-forms.beehiiv.com/59a76f52-8332-4625-89ff-aa0c4bcbbdc6"
                    className="beehiiv-embed"
                    data-test-id="beehiiv-embed"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                        width: '100%',
                        height: '363px',
                        margin: 0,
                        borderRadius: '0px !important',
                        backgroundColor: 'transparent',
                        boxShadow: '0 0 #0000',
                        maxWidth: '100%'
                    }}
                    title="Beehiiv Subscription Form"
                />
                <div className="newsletter-archive-link">
                    <a
                        href="https://getlaunchletter.beehiiv.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        View Archive on Beehiiv! →
                    </a>
                </div>
            </div>
        </HubCard>
    )
}
