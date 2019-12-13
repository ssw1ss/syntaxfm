/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Range } from "react-range"

import { useAudioState, useAudioDispatch } from "../../context/AudioProvider"

const trackContainer = {
  padding: ".5rem 0",
  width: "4rem",
}
const trackEl = {
  height: ".2rem",
  width: "100%",
  borderRadius: ".1rem",
  alignSelf: "center",
}

const MIN = 0
const MAX = 1

const VolumeRange = () => {
  const { volume } = useAudioState()
  const { setVolume } = useAudioDispatch()
  const [values, setValues] = useState([volume])
  const handleChange = values => {
    setVolume(values[0])
  }
  React.useEffect(() => {
    setValues([volume])
  }, [volume])
  return (
    <Range
      step={0.01}
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
            ref={props.ref}
            sx={trackEl}
            style={{
              background: `linear-gradient(to right, #fff 0%, #fff ${values[0] *
                100}%, #999 ${values[0] * 100}%, #999 100%)`,
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
            height: "12px",
            width: "12px",
            padding: "0",
            borderRadius: "12px",
            backgroundColor: "white",
            boxShadow:
              "0 0 3px 3px rgba(0,0,0,0.075),0 0 2px 1px rgba(0,0,0,0.2)",
          }}
        />
      )}
    />
  )
}

export default VolumeRange
