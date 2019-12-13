/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Box, Flex, Text, Link, ExternalLink } from "ui"
import VolumeRange from "./VolumeRange"
import SpeedControl from "./SpeedControl"

const settingsContainer = {
  userSelect: "none",
  display: "grid",
  gridTemplate: "1fr 1fr / 1fr 1fr",
  bg: "backgroundSubtle",
  height: "100%",
  gridGap: "1px",
  borderLeft: theme => [
    "none",
    "none",
    `1px solid ${theme.colors.backgroundSubtle}`,
  ],
}
const field = {
  bg: "background",
  alignItems: "center",
  justifyContent: "center",
  px: ["none", "none", "none", "1rem"],
}
const label = {
  fontSize: 4,
  color: "gray",
  mr: ".75rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
  display: "block",
  textDecoration: "none",
}

const Settings = ({ download, notes }) => {
  return (
    <Box sx={settingsContainer}>
      <Flex sx={field}>
        <Link to={`/${notes}`} sx={label}>
          📒Show notes
        </Link>
      </Flex>
      <Flex sx={field}>
        <ExternalLink href={download} sx={label}>
          👇Download
        </ExternalLink>
      </Flex>
      <Flex sx={field}>
        <Text sx={label}>Vol</Text>
        <VolumeRange />
      </Flex>
      <Flex sx={field}>
        <Text sx={label}>Spd</Text>
        <SpeedControl />
      </Flex>
    </Box>
  )
}

export default Settings
