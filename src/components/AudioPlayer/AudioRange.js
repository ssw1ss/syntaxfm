/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Range } from "react-range"
import {
  SliderInput,
  SliderTrack,
  SliderTrackHighlight,
  SliderHandle,
} from "@reach/slider"

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

const AudioRange2 = props => {
  const state = useAudioState()
  // const [value, setValue] = useState(state.time)
  const [value, setValue] = useState(state.time)
  const { seek } = useAudioDispatch()
  const handleChange = newVal => {
    console.log(newVal, typeof newVal)
    setValue(newVal)
    const seekTo = ((newVal / 100) * state.duration).toFixed(6)
    seek(seekTo)
  }
  React.useEffect(() => {
    setValue((state.time / state.duration) * 100)
  }, [state.time, state.duration])
  return (
    <SliderInput
      step={0.1}
      min={MIN}
      max={MAX}
      value={value}
      onChange={handleChange}
      css={sliderSx}
    >
      <SliderTrack css={sliderTrackSx}>
        <SliderTrackHighlight css={sliderTrackHighlightSx} />
        <SliderHandle />
      </SliderTrack>
    </SliderInput>
  )
}

const AudioRange = props => {
  const state = useAudioState()
  const { seek } = useAudioDispatch()
  const [values, setValues] = useState([state.time])
  const handleChange = values => {
    // setValues isn't "necessary" here because seeking will cause the state to rerender,
    // but it makes the audio range UI less janky when an episode isn't fully loaded
    setValues(values)
    const seekTo = ((values[0] / 100) * state.duration).toFixed(6)
    seek(seekTo)
  }
  React.useEffect(() => {
    setValues([(state.time / state.duration) * 100])
  }, [state.time, state.duration])
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
