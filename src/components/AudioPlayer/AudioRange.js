/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Range } from "react-range"

import { useAudioState, useAudioDispatch } from "../../context/AudioProvider"

const trackContainer = {
  width: "100%",
}
const trackEl = {
  height: "100%",
  width: "100%",
  alignSelf: "center",
}

const sliderSx = {
  position: "relative",
  width: "100%",
  height: "100%",
  background: "white",
}
const sliderTrackSx = {
  width: "100%",
  height: "100%",
  background: "#777",
}
const sliderTrackHighlightSx = {
  height: "100%",
  width: "100%",
  background: "linear-gradient(to right, #FFD400, #00FFB2)",
}

const MIN = 0
const MAX = 100

const toFixedNumber = num => {
  return Number(num.toFixed(6))
}

const AudioRange = ({ episodeNumber }) => {
  const { time, duration } = useAudioState()
  const { seek, ref } = useAudioDispatch()
  const defaultTime =
    time > 0 && duration > 0 ? toFixedNumber((time / duration) * 100) : 0
  const [values, setValues] = useState([defaultTime])
  const handleChange = values => {
    // setValues isn't "necessary" here because seeking will cause the state to rerender,
    // but it makes the audio range UI less janky when an episode isn't fully loaded
    setValues(values)
    const seekTo = toFixedNumber(values[0] / 100) * duration
    seek(seekTo)
  }
  React.useEffect(() => {
    setValues([(time / duration) * 100])
  }, [time, duration])
  React.useEffect(() => {
    // Start an interval to save last play time every x seconds
    const setLastPlayed = () => {
      localStorage.setItem(
        `episode-${episodeNumber}`,
        JSON.stringify({ lastTime: ref.current.currentTime })
      )
    }
    const setLastPlayedInterval = setInterval(setLastPlayed, 1000)
    return () => clearInterval(setLastPlayedInterval)
  }, [episodeNumber, duration])
  // React.useEffect(() => {

  // }, [duration])
  return (
    <Range
      step={0.1}
      min={MIN}
      max={MAX}
      values={values}
      onChange={values => handleChange(values)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={props.style}
          sx={trackContainer}
        >
          <div
            onMouseDown={e => e.preventDefault()}
            onTouchStart={e => e.preventDefault()}
            ref={props.ref}
            sx={trackEl}
            style={{
              background: `linear-gradient(to right, #FFD400 0%, #00FFB2 ${values[0]}%, #959295 ${values[0]}%, #959295 100%)`,
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
          }}
        />
      )}
    />
  )
}

export default AudioRange
