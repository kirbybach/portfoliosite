import { Link } from 'react-router-dom'

interface HubCardProps {
    title: string
    icon: string
    description: string
    linkTo?: string
    disabled?: boolean
    isDoubleWidth?: boolean
    children?: React.ReactNode
}

export default function HubCard({ title, icon, description, linkTo, disabled, isDoubleWidth, children }: HubCardProps) {
    const isLink = !!linkTo && !disabled

    const cardContent = (
        <div className={`hub-card glass-card ${disabled ? 'hub-card-disabled' : ''} ${isDoubleWidth ? 'hub-card-double' : ''}`}>
            <div className="hub-card-header">
                <span className="hub-card-icon">{icon}</span>
                <h3 className="hub-card-title">{title}</h3>
            </div>
            <p className="hub-card-description">{description}</p>
            {children && <div className="hub-card-preview">{children}</div>}
            {linkTo && (
                <span className="hub-card-link">
                    {disabled ? 'Coming soon' : 'View →'}
                </span>
            )}
        </div>
    )

    if (!isLink) {
        return cardContent
    }

    return (
        <Link to={linkTo!} className="hub-card-wrapper">
            {cardContent}
        </Link>
    )
}
