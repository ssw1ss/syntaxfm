import React, { createContext, useContext, useMemo, useState } from "react"
import { useAudio } from "react-use"
import { useEpisodeState } from "./EpisodeProvider"

const AudioStateContext = createContext()
const AudioDispatchContext = createContext()

export const AudioProvider = ({ children }) => {
  const episode = useEpisodeState()
  const [speed, setSpeed] = useState(1)
  const audioProps = {
    src: episode ? episode.frontmatter.url : episode,
    autoPlay: episode ? episode.autoplay : false,
    preload: "",
  }
  const [audio, state, controls, ref] = useAudio(<audio {...audioProps} />)
  const dispatch = useMemo(() => {
    return ref.current
      ? {
          play: () => ref.current.play(),
          pause: () => ref.current.pause(),
          seek: seekTo =>
            (ref.current.currentTime = Math.min(
              state.duration,
              Math.max(0, seekTo)
            )),
          isPlaying: !state.paused,
          setVolume: controls.volume,
          speed,
          setSpeed,
        }
      : {
          play: controls.play,
          pause: controls.pause,
          seek: controls.seek,
          setVolume: controls.volume,
          isPlaying: !state.paused,
          speed,
          setSpeed,
        }
  }, [state.paused, episode, state.duration])
  React.useEffect(() => {
    if (ref.current !== null) ref.current.playbackRate = speed
  }, [ref.current, speed, episode])
  return (
    <>
      {audio}
      <AudioStateContext.Provider value={state}>
        <AudioDispatchContext.Provider value={dispatch}>
          {children}
        </AudioDispatchContext.Provider>
      </AudioStateContext.Provider>
    </>
  )
}

export const useAudioState = () => {
  const context = useContext(AudioStateContext)
  if (context === undefined) {
    console.log("useEpisodeState must be used within an AudioStateProvider")
  }
  return context
}

export const useAudioDispatch = () => {
  const context = useContext(AudioDispatchContext)
  if (context === undefined) {
    console.log("useEpisodeState must be used within an AudioControlsProvider")
  }
  return context
}
