import { useState, useEffect } from 'react'

interface TypeWriterProps {
    phrases: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
}

export default function TypeWriter({
    phrases,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('')
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentPhrase.length) {
                    setDisplayText(currentPhrase.slice(0, displayText.length + 1))
                } else {
                    // Finished typing, pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    // Finished deleting, move to next phrase
                    setIsDeleting(false)
                    setPhraseIndex((prev) => (prev + 1) % phrases.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className="typewriter">
            {displayText}
            <span className="typewriter-cursor">|</span>
        </span>
    )
}
