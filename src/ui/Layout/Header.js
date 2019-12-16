/** @jsx jsx */
import { jsx, Header as HeaderEl } from "theme-ui"
import React, { useState } from "react"

import { Box, Flex, Link, ExternalLink, Close, Heading, MenuButton } from "ui"
import BioCard from "./BioCard"

const header = {
  variant: "layout.header",
  borderBottom: theme => [
    `3px solid ${theme.colors.backgroundSubtle}`,
    `3px solid ${theme.colors.backgroundSubtle}`,
    `3px solid ${theme.colors.backgroundSubtle}`,
    `3px solid ${theme.colors.backgroundSubtle}`,
    `3px solid ${theme.colors.backgroundSubtle}`,
    "none",
  ],
  borderLeft: theme => [
    "none",
    "none",
    "none",
    "none",
    "none",
    `1px solid ${theme.colors.backgroundSubtle}`,
  ],
}
const headerNav = {
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}
const logo = {
  color: "primary",
  fontSize: [2, 2, 2, 2, 1, 0],
  fontWeight: "medium",
  letterSpacing: ".25px",
}
const headerContent = {
  bg: "background",
  p: ["1rem", "1rem", "1rem", "1rem", "2rem"],
  borderRight: theme => [
    "none",
    "none",
    `1px solid ${theme.colors.backgroundSubtle}`,
    `1px solid ${theme.colors.backgroundSubtle}`,
    `1px solid ${theme.colors.backgroundSubtle}`,
    "none",
  ],
  borderLeft: theme => [
    "none",
    "none",
    "none",
    "none",
    "none",
    `1px solid ${theme.colors.backgroundSubtle}`,
  ],
}

const HeaderControls = ({ isHomepage, showMenu, setShowMenu, ...props }) => {
  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <HeaderEl sx={header} {...props}>
      <Flex sx={headerNav}>
        <Box style={{ width: "2.5rem" }}>
          {!isHomepage && (
            <Link to="/" sx={{ display: ["block", "block", "none"] }}>
              Back
            </Link>
          )}
        </Box>
        <Link to="/">
          <Heading sx={logo}>syntax</Heading>
        </Link>
        <Box sx={{ width: "2.5rem" }} onClick={handleMenuClick}>
          <Box
            sx={{
              display: ["block", "block", "block", "block", "block", "none"],
            }}
          >
            {showMenu ? <Close /> : <MenuButton />}
          </Box>
        </Box>
      </Flex>
    </HeaderEl>
  )
}

const HeaderContent = ({ showMenu, ...props }) => {
  return (
    <Box sx={{ ...headerContent, zIndex: showMenu ? 4 : 1 }} {...props}>
      <Heading as="h1" variant="h3">
        A hasty treats podcast for web developers. Brought to you by:
      </Heading>
      <BioCard twitter="@wesbos" name="Wes Bos">
        Full Stack JavaScript Developer. Creator of really good{" "}
        <ExternalLink
          target="_blank"
          variant="external"
          href="https://wesbos.com/courses"
        >
          web development courses
        </ExternalLink>
        . BBQ enthusiast.
      </BioCard>
      <BioCard twitter="@stolinski" name="Scott Tolinski">
        Web Developer, Creator of{" "}
        <ExternalLink
          target="_blank"
          variant="external"
          href="https://www.leveluptutorials.com/"
        >
          Level Up Tuts
        </ExternalLink>
        , Bboy, Robotops Crew and Youtuber
      </BioCard>
    </Box>
  )
}

const Header = ({ location }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <HeaderControls
        isHomepage={location.pathname === "/"}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        sx={{
          gridArea: [
            "header",
            "header",
            "header",
            "header",
            "header",
            "headerControls",
          ],
        }}
      />
      <HeaderContent
        sx={{
          gridArea: [
            "content-start / 1 / audioPlayer-end / 2",
            "content-start / 1 / audioPlayer-end / 2",
            "sidebar",
            "sidebar",
            "sidebar",
            "headerContent",
          ],
        }}
        showMenu={showMenu}
      />
    </>
  )
}

export default Header
