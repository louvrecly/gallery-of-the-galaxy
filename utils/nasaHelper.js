import moment from 'moment'

const EARLIEST_START_DATE = '2021-01-01' // earliest available start date: '1995-06-16'
const DEFAULT_DAYS_COUNT = 14
const earliestStartDateMoment = moment(EARLIEST_START_DATE)

export function validateDateString(dateString = '') {
  const date = moment(dateString)
  return (
    date.isValid() && date.isBetween(EARLIEST_START_DATE, moment(), 'day', '[]')
  )
}

export function getNextDateRange(oldStartDate) {
  const endDateMoment = oldStartDate
    ? moment(oldStartDate).subtract(1, 'days')
    : moment()
  const daysCount = Math.min(
    endDateMoment.diff(earliestStartDateMoment, 'days'),
    DEFAULT_DAYS_COUNT,
  )
  const endDate = endDateMoment.format('YYYY-MM-DD')
  const startDate = moment(endDate)
    .subtract(daysCount, 'days')
    .format('YYYY-MM-DD')
  return { startDate, endDate }
}
