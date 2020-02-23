import React from "react"

import { Text } from "ui"
import { useAudioDispatch } from "../context/AudioProvider"
import { useEpisodeState } from "../context/EpisodeProvider"
import getSeconds from "../utils/getSeconds"

const Timestamp = ({ children, number }) => {
  const { seek } = useAudioDispatch()
  const episode = useEpisodeState()
  const active = number === episode.frontmatter.number
  const title = active ? `Skip to ${children}` : "This episode is not active"
  const handleClick = () => {
    if (active) seek(getSeconds(children))
  }
  return (
    <Text
      disabled={!active}
      onClick={handleClick}
      title={title}
      variant="timestamp"
      as="span"
      sx={{
        "&:hover": {
          color: active ? "heading" : "text",
          opacity: active ? "1" : ".85",
        },
      }}
    >
      {children}
    </Text>
  )
}

export default Timestamp
