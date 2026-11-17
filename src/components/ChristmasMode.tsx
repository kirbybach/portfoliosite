import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

const monthInIndiana = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Indiana/Indianapolis',
  month: 'numeric',
})

function isDecember() {
  return monthInIndiana.format(new Date()) === '12'
}

// Stagger the flakes so a freshly opened page already has snow in midair.
const flakes = Array.from({ length: 24 }, (_, index) => ({
  '--left': `${(index * 37 + 7) % 100}%`,
  '--size': `${3 + index % 4}px`,
  '--drift': `${(index % 2 === 0 ? 1 : -1) * (14 + index % 5 * 8)}px`,
  '--duration': `${14 + index % 7 * 2}s`,
  '--delay': `${-(index * 7.3 % 26)}s`,
} as CSSProperties))

function Snowfall() {
  const [paused, setPaused] = useState(() => document.hidden)
  useEffect(() => {
    const update = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  return (
    <div className="christmas-snow" data-paused={paused} aria-hidden="true">
      {flakes.map((style, index) => <i key={index} style={style} />)}
    </div>
  )
}

export default function ChristmasMode({ children }: { children: ReactNode }) {
  const [inSeason, setInSeason] = useState(isDecember)
  // Keep a preview active through in-site navigation for this visit.
  const [preview] = useState(() => new URLSearchParams(window.location.search).get('christmas') === '1')

  useEffect(() => {
    const refresh = () => setInSeason(isDecember())
    const timer = window.setInterval(refresh, 60_000)
    document.addEventListener('visibilitychange', refresh)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', refresh)
    }
  }, [])

  const active = inSeason || preview
  return (
    <div className={active ? 'christmas-mode' : undefined}>
      {children}
      {active && <Snowfall />}
    </div>
  )
}
