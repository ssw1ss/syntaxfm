import React, { createContext, useContext, useState } from "react"
import episodes from "../episodesList.json"

const EpisodeStateContext = createContext()
const EpisodeDispatchContext = createContext()

export const EpisodeProvider = ({ children }) => {
  const [episode, setEpisode] = useState({ ...episodes[0] })
  return (
    <EpisodeStateContext.Provider value={episode}>
      <EpisodeDispatchContext.Provider value={setEpisode}>
        {children}
      </EpisodeDispatchContext.Provider>
    </EpisodeStateContext.Provider>
  )
}

export const useEpisodeState = () => {
  const context = useContext(EpisodeStateContext)
  if (context === undefined) {
    console.log("useEpisodeState must be used within an EpisodeStateProvider")
  }
  return context
}

export const useEpisodeDispatch = () => {
  const context = useContext(EpisodeDispatchContext)
  if (context === undefined) {
    console.log(
      "useEpisodeState must be used within an EpisodeDispatchProvider"
    )
  }
  return context
}
