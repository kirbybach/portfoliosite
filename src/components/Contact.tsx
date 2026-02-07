import { useState } from 'react'
import { LinkedInIcon, GithubIcon } from './Icons'

const socialLinks = [
    { href: 'https://linkedin.com/in/kirby-bach', icon: <LinkedInIcon />, label: 'LinkedIn', value: 'kirby-bach' },
    { href: 'https://github.com/kirbybach', icon: <GithubIcon />, label: 'GitHub', value: '@kirbybach' },
]

export default function Contact() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus('submitting')

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                setFormStatus('success')
                form.reset()
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title"><span className="gradient-text">Let's Connect</span></h2>
                <p className="contact-intro">
                    I'm always open to discussing new opportunities, interesting projects, or just chatting about tech.
                </p>

                <div className="contact-wrapper">
                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <input type="hidden" name="access_key" value="dd2c67ec-ac72-45ca-80b2-281f128d1ac1" />

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="What would you like to discuss?"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary form-submit"
                            disabled={formStatus === 'submitting'}
                        >
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>

                        {formStatus === 'success' && (
                            <p className="form-success">Thanks! I'll get back to you soon.</p>
                        )}
                        {formStatus === 'error' && (
                            <p className="form-error">Something went wrong. Please try again.</p>
                        )}
                    </form>

                    <div className="social-links">
                        <p className="social-label">Or find me on</p>
                        <div className="social-cards">
                            {socialLinks.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    className="contact-card glass-card"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <div className="contact-icon">{c.icon}</div>
                                    <span className="contact-label">{c.label}</span>
                                    <span className="contact-value">{c.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
