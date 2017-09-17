export const asDaysInt = (seconds) => Math.floor(seconds/(60*60*24))

export const asWeekString = (seconds) => {
  const days = asDaysInt(seconds);

  return `${Math.floor(days/7)} weeks, ${days%7} days`
}
