// Wedding event details — single source of truth for calendar exports.
// 12 December 2026, 6:00 PM – 10:00 PM, Asia/Kuala_Lumpur (UTC+8)
export const WEDDING_EVENT = {
  title: 'Zhi Han & Yi Qi — Wedding',
  // UTC times: 6:00 PM – 10:00 PM KL time
  startUtc: '20261212T100000Z',
  endUtc: '20261212T140000Z',
  location: 'Sheraton Imperial Kuala Lumpur Hotel, Jalan Sultan Ismail, 50250 Kuala Lumpur, Malaysia',
  description:
    'Wedding of Zhi Han & Yi Qi.\n6:00 PM Cocktail Hour · 7:00 PM Ceremony · 8:30 PM Speech & Tossing · 10:00 PM The Send-Off.\nDirections: https://maps.app.goo.gl/o1bTdTs9nYActEF36',
}

export function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: WEDDING_EVENT.title,
    dates: `${WEDDING_EVENT.startUtc}/${WEDDING_EVENT.endUtc}`,
    details: WEDDING_EVENT.description,
    location: WEDDING_EVENT.location,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function icsEscape(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

export function buildIcs(): string {
  const now = new Date()
  const stamp = `${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(
    now.getUTCDate(),
  ).padStart(2, '0')}T${String(now.getUTCHours()).padStart(2, '0')}${String(
    now.getUTCMinutes(),
  ).padStart(2, '0')}${String(now.getUTCSeconds()).padStart(2, '0')}Z`

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//tzhlyqwedding//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:tzhlyq-wedding-20261212@tzhlyqwedding.com`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${WEDDING_EVENT.startUtc}`,
    `DTEND:${WEDDING_EVENT.endUtc}`,
    `SUMMARY:${icsEscape(WEDDING_EVENT.title)}`,
    `DESCRIPTION:${icsEscape(WEDDING_EVENT.description)}`,
    `LOCATION:${icsEscape(WEDDING_EVENT.location)}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:Wedding tomorrow',
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'ACTION:DISPLAY',
    'DESCRIPTION:Wedding in 2 hours',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return lines.join('\r\n')
}

export function downloadIcs(): void {
  const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'zhi-han-yi-qi-wedding.ics'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
