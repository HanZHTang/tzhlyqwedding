import finale from '../assets/finale.jpg'
import { googleCalendarUrl, downloadIcs } from '../utils/calendar'

export default function Finale() {
  return (
    <section className="relative">
      <img
        src={finale}
        alt="Zhi Han and Yi Qi waving at the camera"
        className="w-full h-[70svh] sm:h-[85svh] lg:h-[95svh] object-cover object-[center_30%]"
      />
      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-full text-center px-4">
        <p className="font-display text-xl sm:text-3xl lg:text-4xl tracking-[0.12em] text-neutral-900">
          WE CAN’T WAIT TO SEE YOU
        </p>
        <p className="mt-3 text-[11px] sm:text-xs tracking-[0.3em] text-neutral-700 uppercase">
          Don’t forget — mark your calendar
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={googleCalendarUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-[#eae4cc] transition-colors min-h-[44px] leading-[24px]"
          >
            Google Calendar
          </a>
          <button
            type="button"
            onClick={downloadIcs}
            className="inline-block border border-neutral-900 px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-[#eae4cc] transition-colors min-h-[44px] leading-[24px]"
          >
            Apple / Outlook
          </button>
        </div>
      </div>
    </section>
  )
}
