import React, { useState } from "react"

import { Text } from "ui"
import { useAudioDispatch } from "../context/AudioProvider"
import { useEpisodeDispatch } from "../context/EpisodeProvider"

const playButton = {
  fontSize: 5,
  lineHeight: "0",
  cursor: "pointer",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform .05s",
  color: "gray",
  "&:hover": {
    color: "text",
  },
}
const activePlayButton = {
  ...playButton,
  border: "1px solid #fff",
  color: "text",
}

export const PlayButton = ({ episode, ...props }) => {
  const { play, pause, isPlaying } = useAudioDispatch()
  const handleClick = () => {
    isPlaying ? pause() : play()
  }
  return (
    <Text onClick={handleClick} sx={activePlayButton} {...props}>
      {isPlaying ? `❚❚` : `▶`}
    </Text>
  )
}

export const useSetEpisodeOnClick = episode => {
  const setEpisode = useEpisodeDispatch()
  return { onClick: () => setEpisode({ ...episode, autoplay: true }) }
}

export const SetEpisodeButton = ({ episode }) => {
  const onClick = useSetEpisodeOnClick(episode)
  return (
    <Text sx={playButton} {...onClick}>
      ▶
    </Text>
  )
}
