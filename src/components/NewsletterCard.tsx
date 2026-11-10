export default function NewsletterCard() {
    return (
        <section className="hub-card glass-card newsletter-card" aria-label="Newsletter">
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
