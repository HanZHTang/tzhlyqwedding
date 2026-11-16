import Reveal from '../components/Reveal'
import corridor from '../assets/corridor.jpg'
import { googleCalendarUrl, downloadIcs } from '../utils/calendar'

export default function Info() {
  return (
    <section className="bg-[#9f8967] py-16 sm:py-24 px-6 text-neutral-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Details — left */}
        <Reveal className="bg-[#eae4cc] px-8 py-12 sm:px-12 text-center shadow-xl">
          {/* Location */}
          <svg
            width="30"
            height="38"
            viewBox="0 0 24 32"
            fill="none"
            className="mx-auto"
            aria-hidden="true"
          >
            <path
              d="M12 1C6 1 1.5 5.6 1.5 11.4 1.5 19.5 12 31 12 31s10.5-11.5 10.5-19.6C22.5 5.6 18 1 12 1Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="11.5" r="3.6" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <p className="mt-3 text-sm font-semibold tracking-[0.25em]">LOCATION</p>
          <p className="mt-1 text-lg font-light">Sheraton Imperial Kuala Lumpur Hotel</p>

          {/* Date */}
          <svg
            width="30"
            height="32"
            viewBox="0 0 24 26"
            fill="none"
            className="mx-auto mt-10"
            aria-hidden="true"
          >
            <rect x="1" y="4" width="22" height="21" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M1 10h22" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 1v5M17 1v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path
              d="M6 14h2M11 14h2M16 14h2M6 18h2M11 18h2M16 18h2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-3 text-sm font-semibold tracking-[0.25em]">DATE</p>
          <p className="mt-1 text-lg font-light">12th December 2026</p>
          <p className="mt-1 text-sm font-light text-neutral-600">6:00 PM – 10:00 PM</p>

          {/* Add to Calendar */}
          <p className="mt-6 text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
            Add to Calendar
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-[#eae4cc] transition-colors min-h-[44px] leading-[24px]"
            >
              Google Calendar
            </a>
            <button
              type="button"
              onClick={downloadIcs}
              className="inline-block border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-[#eae4cc] transition-colors min-h-[44px] leading-[24px]"
            >
              Apple / Outlook
            </button>
          </div>

          {/* Reminder note */}
          <p className="mt-12 font-display text-2xl sm:text-3xl tracking-[0.1em] font-semibold">
            MARK YOUR CALENDAR
          </p>
          <p className="mt-3 text-[15px] font-light text-neutral-600 leading-relaxed">
            Saturday, 12th December 2026 · 6:00 PM
            <br />
            We can't wait to celebrate with you.
          </p>
        </Reveal>

        {/* Photo — right, same height as the details card */}
        <Reveal delay={150}>
          <img
            src={corridor}
            alt="Couple in traditional attire"
            className="w-full max-w-md mx-auto lg:max-w-none object-cover aspect-[3/4] shadow-xl"
          />
        </Reveal>
      </div>
    </section>
  )
}
