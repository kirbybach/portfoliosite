export default function NewsletterCard() {
    return (
        <section className="hub-card glass-card newsletter-card" aria-labelledby="newsletter-title">
            <div className="hub-card-header">
                <span className="hub-card-icon" aria-hidden="true">🚀</span>
                <h3 className="hub-card-title" id="newsletter-title">Newsletter</h3>
            </div>
            <p className="hub-card-description">New notes, projects, and discoveries, straight to your inbox.</p>
            <div className="newsletter-signup-frame">
                <iframe
                    src="https://subscribe-forms.beehiiv.com/59a76f52-8332-4625-89ff-aa0c4bcbbdc6"
                    className="newsletter-signup"
                    title="Subscribe to Kirby Bach’s newsletter"
                />
            </div>
            <a
                href="https://getlaunchletter.beehiiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hub-card-link newsletter-archive"
            >
                Read past issues →
            </a>
        </section>
    )
}
