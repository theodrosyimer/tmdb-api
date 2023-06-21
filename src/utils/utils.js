/* eslint-disable prettier/prettier */
export function convertMinutesToHoursAndMinutes(minutes) {
  return `${Math.trunc(minutes / 60)}h${minutes % 60 < 10
    ? `0${minutes % 60}`
    : minutes % 60
    }`
}
