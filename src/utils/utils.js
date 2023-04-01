export function convertMinutesToHoursAndMinutes(n) {
  return `${((n / 60) >> 0)}h${(n % 60) < 10 ? '0' + (n % 60) : (n % 60)}`
}
