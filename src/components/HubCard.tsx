import { Link } from 'react-router-dom'

interface HubCardProps {
    title: string
    icon: string
    description: string
    linkTo: string
    disabled?: boolean
    children?: React.ReactNode
}

export default function HubCard({ title, icon, description, linkTo, disabled, children }: HubCardProps) {
    const cardContent = (
        <div className={`hub-card glass-card ${disabled ? 'hub-card-disabled' : ''}`}>
            <div className="hub-card-header">
                <span className="hub-card-icon">{icon}</span>
                <h3 className="hub-card-title">{title}</h3>
            </div>
            <p className="hub-card-description">{description}</p>
            {children && <div className="hub-card-preview">{children}</div>}
            <span className="hub-card-link">
                {disabled ? 'Coming soon' : 'View →'}
            </span>
        </div>
    )

    if (disabled) {
        return cardContent
    }

    return (
        <Link to={linkTo} className="hub-card-wrapper">
            {cardContent}
        </Link>
    )
}
