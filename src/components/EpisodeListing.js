/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"

import { Box } from "ui"
import EpisodeListItem from "./EpisodeListItem"
import episodes from "../episodesList.json"
import { useEpisodeState } from "../context/EpisodeProvider"

const EpisodeListing = ({ location, ...props }) => {
  const currentEpisode = useEpisodeState()
  return (
    <Box {...props}>
      {episodes.map((episode, i) => {
        const isCurrentEpisode = currentEpisode.id === episode.id
        const isIndexActive = location.pathname === "/" && i === 0
        return (
          <EpisodeListItem
            key={episode.id}
            episode={episode}
            isCurrentEpisode={isCurrentEpisode}
            isIndexActive={isIndexActive}
          />
        )
      })}
    </Box>
  )
}

export default EpisodeListing
