const getPrefix = value => {
  return value < 10 ? "0" : ""
}

const formatTime = time => {
  const hrs = ~~(time / 3600)
  const mins = ~~((time % 3600) / 60)
  const secs = ~~time % 60
  let hoursPrefix = ""
  let minutesPrefix = getPrefix(mins)
  let secondsPrefix = getPrefix(secs)
  if (hrs > 0) hoursPrefix += `${hrs}:`
  return `${hoursPrefix}${minutesPrefix}${mins}:${secondsPrefix}${secs}`
}

export default formatTime
