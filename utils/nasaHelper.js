import moment from 'moment'

const oldestStartDate = '2021-01-01' // oldest available start date: '1995-06-16'
const defaultNumOfPosts = 14
const oldestStartDateMoment = moment(oldestStartDate)

export function validateDateString(dateString = '') {
  const date = moment(dateString)
  return date.isValid() && date.isBetween(oldestStartDate, moment(), 'day', '[]')
}

export function getNextDateRange (oldStartDate) {
  const endDateMoment = oldStartDate ? moment(oldStartDate).subtract(1, 'days') : moment()
  const numOfDays = Math.min(endDateMoment.diff(oldestStartDateMoment, 'days'), defaultNumOfPosts)
  const endDate = endDateMoment.format('YYYY-MM-DD')
  const startDate = moment(endDate).subtract(numOfDays, 'days').format('YYYY-MM-DD')
  return { startDate, endDate }
}
