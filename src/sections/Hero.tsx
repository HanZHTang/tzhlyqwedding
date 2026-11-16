import { useEffect, useState } from 'react'
import hero from '../assets/hero.jpg'
import rings from '../assets/rings.png'

const WEDDING_AT = new Date('2026-12-12T18:00:00+08:00').getTime()

function useDaysLeft() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 60000)
    return () => window.clearInterval(t)
  }, [])
  return Math.max(0, Math.ceil((WEDDING_AT - now) / 86400000))
}

export default function Hero() {
  const daysLeft = useDaysLeft()
  return (
    <header className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Zhi Han and Yi Qi in the mountains"
        className="absolute inset-0 h-full w-full object-cover object-[46%_45%] scale-100 sm:scale-[1.12] sm:object-[50%_45%]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        {/* Monogram */}
        <div className="relative flex flex-col items-center -translate-y-[6%]">
          <div className="flex items-center">
            <span className="font-display text-white text-5xl sm:text-7xl lg:text-8xl leading-none pr-4 sm:pr-6">
              T
            </span>
            <span className="block w-px h-14 sm:h-20 lg:h-24 bg-white/90" />
            <span className="font-display text-white text-5xl sm:text-7xl lg:text-8xl leading-none pl-4 sm:pl-6">
              L
            </span>
          </div>
          {/* Name banner below the monogram */}
          <div className="mt-4 bg-white px-4 sm:px-7 py-1.5 sm:py-2 shadow-sm">
            <p className="whitespace-nowrap text-[9px] sm:text-xs lg:text-sm font-medium tracking-[0.35em] sm:tracking-[0.45em] text-neutral-900">
              ZHI&nbsp;HAN&nbsp;&amp;&nbsp;YI&nbsp;QI
            </p>
          </div>
        </div>
        <img src={rings} alt="" className="mt-5 w-32 sm:w-44 opacity-95" />
        <div className="mt-6 bg-white/95 px-5 py-2 shadow-sm">
          <p className="whitespace-nowrap text-[10px] sm:text-xs tracking-[0.3em] text-neutral-900 uppercase tabular-nums">
            {daysLeft > 0 ? `${daysLeft} Days to Go · 12 . 12 . 2026` : 'Today is the Day · 12 . 12 . 2026'}
          </p>
        </div>
      </div>
      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="white" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2.5" fill="white" />
        </svg>
      </div>
    </header>
  )
}
