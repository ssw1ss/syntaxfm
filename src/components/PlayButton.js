import React from "react"

import { Box } from "ui"
import { useAudioDispatch } from "../context/AudioProvider"
import { useEpisodeDispatch } from "../context/EpisodeProvider"

import PlayIcon from "../images/play.svg"
import PauseIcon from "../images/pause.svg"

const playButton = {
  fill: "text",
  cursor: "pointer",
  width: "1.5rem",
  height: "1.5rem",
  p: ".325rem",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "fill .1s",
  border: "1px solid transparent",
  "&:hover": {
    fill: "contrast",
  },
}
const activePlayButton = {
  ...playButton,
  borderColor: "text",
  fill: "contrast",
}

export const PlayButton = () => {
  const { play, pause, isPlaying } = useAudioDispatch()
  const handleClick = () => {
    isPlaying ? pause() : play()
  }
  return (
    <Box onClick={handleClick} sx={activePlayButton}>
      {isPlaying ? (
        <PauseIcon sx={{ width: "100%" }} />
      ) : (
        <PlayIcon sx={{ width: "100%" }} />
      )}
    </Box>
  )
}

export const useSetEpisodeOnClick = episode => {
  const setEpisode = useEpisodeDispatch()
  return { onClick: () => setEpisode({ ...episode, autoplay: true }) }
}

export const SetEpisodeButton = ({ episode }) => {
  const onClick = useSetEpisodeOnClick(episode)
  return (
    <Box sx={playButton} {...onClick}>
      <PlayIcon sx={{ width: "100%" }} />
    </Box>
  )
}
