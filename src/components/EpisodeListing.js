/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"

import { Box } from "ui"
import EpisodeListItem from "./EpisodeListItem"
import episodes from "../episodesList.json"
import { useEpisodeState } from "../context/EpisodeProvider"

const EpisodeListing = props => {
  const currentEpisode = useEpisodeState()
  return (
    <Box {...props}>
      {episodes.map(episode => {
        const isCurrentEpisode = currentEpisode.id === episode.id
        return (
          <EpisodeListItem
            key={episode.id}
            episode={episode}
            isCurrentEpisode={isCurrentEpisode}
          />
        )
      })}
    </Box>
  )
}

export default EpisodeListing
