import { DEFAULT_DATE_FORMATTING_OPTIONS, DEFAULT_LOCALE, DEFAULT_TIME_FORMATTING_OPTIONS } from "../constants/date-time.const"

/**
 * 
 * @param {DateOptions} options 
 * @param {timestamp} time 
 * @returns 
 */
const formatWithOptions = (options, time) => new Intl.DateTimeFormat(DEFAULT_LOCALE, options).format(time)
export const formatTime = (time) => {
    return ({
        time: formatWithOptions(DEFAULT_TIME_FORMATTING_OPTIONS, time),
        date: formatWithOptions(DEFAULT_DATE_FORMATTING_OPTIONS, time),
    })
}