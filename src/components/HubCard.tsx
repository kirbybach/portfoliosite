import { Link } from 'react-router-dom'

interface HubCardProps {
    title: string
    icon: string
    description?: string
    linkTo?: string
    href?: string
    linkLabel?: string
    disabled?: boolean
    isDoubleWidth?: boolean
    children?: React.ReactNode
}

export default function HubCard({ title, icon, description, linkTo, href, linkLabel, disabled, isDoubleWidth, children }: HubCardProps) {
    const isLink = !!linkTo && !disabled

    const cardContent = (
        <div className={`hub-card glass-card ${disabled ? 'hub-card-disabled' : ''} ${isDoubleWidth ? 'hub-card-double' : ''}`}>
            <div className="hub-card-header">
                <span className="hub-card-icon">{icon}</span>
                <h3 className="hub-card-title">{title}</h3>
            </div>
            {description && <p className="hub-card-description">{description}</p>}
            {children && <div className="hub-card-preview">{children}</div>}
            {(linkTo || href) && (
                <span className="hub-card-link">
                    {disabled ? 'Coming soon' : (linkLabel || 'View →')}
                </span>
            )}
        </div>
    )

    if (href && !disabled) {
        return <a href={href} className="hub-card-wrapper" target="_blank" rel="noopener noreferrer">{cardContent}</a>
    }

    if (!isLink) {
        return cardContent
    }

    return (
        <Link to={linkTo!} className="hub-card-wrapper">
            {cardContent}
        </Link>
    )
}
