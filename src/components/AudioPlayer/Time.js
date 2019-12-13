/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Text } from "ui"

import { useAudioState } from "../../context/AudioProvider"
import formatTime from "../../utils/formatTime"

const formattedTime = (current, duration) => {
  const currentTime = formatTime(current)
  const durationTime = formatTime(duration)
  const prefix = [
    ...Array(
      durationTime.toString().length - currentTime.toString().length
    ).keys(),
  ].reduce((a, c) => (a += " "), "")
  return `${prefix}${currentTime} / ${durationTime}`
}

const Time = props => {
  const { time, duration } = useAudioState()
  return (
    <Text sx={{ fontSize: ".65rem" }} variant="tabular">
      {formattedTime(time, duration)}
    </Text>
  )
}

export default Time
