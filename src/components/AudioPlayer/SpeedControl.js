/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useReducer } from "react"

import { Box } from "ui"
import { useAudioDispatch } from "../../context/AudioProvider"

const speedControl = {
  fontSize: 3,
  fontWeight: "semibold",
}

const STEP = 0.25
const MIN = 0.75
const MAX = 2.5

const initialState = {
  decreaseDisabled: false,
  increaseDisabled: false,
}
const getInitialState = initialSpeed => {
  return { ...initialState, speed: initialSpeed }
}
const speedReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": {
      if (state.increaseDisabled) return state
      const speed = state.speed + STEP
      return {
        speed,
        decreaseDisabled: false,
        increaseDisabled: speed >= MAX,
      }
    }
    case "DECREASE": {
      if (state.decreaseDisabled) return state
      const speed = state.speed - STEP
      return {
        speed,
        increaseDisabled: false,
        decreaseDisabled: speed <= MIN,
      }
    }
    default:
      return state
  }
}

const formatSpeed = num => {
  return `${num}`.length === 1 ? `${num}.0x` : `${num}x`
}

const SpeedControls = () => {
  const { speed: initialSpeed, setSpeed } = useAudioDispatch()
  const [{ speed, increaseDisabled, decreaseDisabled }, dispatch] = useReducer(
    speedReducer,
    initialSpeed,
    getInitialState
  )
  React.useEffect(() => {
    if (setSpeed) {
      setSpeed(speed)
    }
  }, [speed, setSpeed])
  return (
    <Box sx={speedControl}>
      <span
        sx={{
          color: decreaseDisabled ? "gray" : "contrast",
          cursor: "pointer",
        }}
        onClick={() => dispatch({ type: "DECREASE" })}
      >
        -
      </span>
      <span sx={{ color: "contrast" }}> {formatSpeed(speed)} </span>
      <span
        sx={{
          color: increaseDisabled ? "gray" : "contrast",
          cursor: "pointer",
        }}
        onClick={() => dispatch({ type: "INCREASE" })}
      >
        +
      </span>
    </Box>
  )
}

export default SpeedControls
