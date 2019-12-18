/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React, { useState, useCallback } from "react"
import { Global } from "@emotion/core"
import SimpleBar from "simplebar-react"
import Div100vh from "react-div-100vh"

import { Box } from "ui"
import globalCSS from "./globalCSS"
import Header from "./Header"
import AudioPlayer from "../../components/AudioPlayer"
import EpisodeListing from "../../components/EpisodeListing"

const siteWrapper = {
  bg: "background",
  maxWidth: "125rem",
  height: "100vh",
  // position: "fixed",
  // top: "0",
  // left: "0",
  marginRight: "auto",
  display: "grid",
  gridTemplate: [
    "minmax(3.25rem, auto) 1fr auto / auto",
    "minmax(3.25rem, auto) 1fr auto / auto",
    "minmax(5rem, auto) 1fr / 20rem 1fr",
    "minmax(5rem, auto) 1fr / 23rem 1fr",
    "minmax(5rem, auto) 1fr / 26rem 1fr",
    "minmax(5rem, auto) 1fr / 1fr 2fr 1fr",
  ],
  gridTemplateAreas: [
    `"header"
    "content"
    "audioPlayer"`,
    `"header"
    "content"
    "audioPlayer"`,
    `"header audioPlayer"
    "sidebar content"`,
    `"header audioPlayer"
    "sidebar content"`,
    `"header audioPlayer"
    "sidebar content"`,
    `"sidebar audioPlayer headerControls"
    "sidebar content headerContent"`,
  ],
}
const episodesContainer = {
  gridArea: ["content", "content", "sidebar"],
  zIndex: 2,
  bg: "background",
  overflowY: "hidden",
  borderRight: theme => [
    "none",
    "none",
    `1px solid ${theme.colors.backgroundSubtle}`,
  ],
}
const audioPlayer = {
  gridArea: "audioPlayer",
  zIndex: 3,
}

const Layout = ({ children, location }) => {
  let isHomePage = location.pathname === "/"
  // if (location.pathname.substring(1, 9) === "episodes") pageType = "episode"
  // else if (location.pathname === "/") pageType = "home"
  const showEpisodeListing = isHomePage ? "block" : "none"
  const showEpisodeContent = !isHomePage ? "block" : "none"
  return (
    <>
      <Global styles={globalCSS} />
      <Styled.root>
        <Div100vh sx={siteWrapper}>
          <Header location={location} />
          <Box
            sx={{
              gridArea: "content",
              overflowY: "hidden",
              zIndex: 2,
              bg: "background",
              display: [showEpisodeContent, showEpisodeContent, "block"],
            }}
          >
            {children}
          </Box>
          <Box
            sx={{
              ...episodesContainer,
              display: [showEpisodeListing, showEpisodeListing, "block"],
            }}
          >
            <SimpleBar style={{ height: "100%", overflowX: "hidden" }}>
              <EpisodeListing location={location} />
            </SimpleBar>
          </Box>
          <AudioPlayer style={audioPlayer} />
        </Div100vh>
      </Styled.root>
    </>
  )
}

export default Layout
