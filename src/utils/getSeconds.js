let getSeconds = str => {
  const times = str.split(":")
  const reverseIndex = (length, index) => Math.abs(index - (length - 1))
  return times.reduceRight((a, c, i) => {
    const index = reverseIndex(times.length, i)
    return a + c * Math.pow(60, index)
  }, 0)
}

export default getSeconds
