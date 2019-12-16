/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Flex, Link, Heading, Text } from "ui"
import { PlayButton, SetEpisodeButton } from "./PlayButton"

const episodeItem = {
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  px: [3, 3, 4],
  py: 3,
  borderBottom: "1px solid",
  borderColor: "backgroundSubtle",
  "&:last-child": {
    borderBottom: "none",
  },
}
const episodeLink = {
  flexBasis: "auto",
  color: "text",
  opacity: ".85",
  "&:hover": { opacity: "1", color: "heading" },
  "&.active": { opacity: "1", color: "heading" },
}
const headingHover = {
  transition: "color .2s",
  color: "inherit",
}

const EpisodeListItem = ({
  episode,
  isCurrentEpisode,
  isIndexActive,
  ...props
}) => {
  const test = () => {
    console.log("episode list item clicked")
  }
  return (
    <Flex sx={episodeItem} {...props} onClick={test}>
      <Link
        to={`/${episode.fields.slug}`}
        sx={episodeLink}
        className={isIndexActive ? "active" : ""}
        activeClassName="active"
      >
        <Text variant="label">Episode #{episode.frontmatter.number}</Text>
        <Heading as="h4" variant="h4" sx={headingHover}>
          {episode.frontmatter.title}
        </Heading>
      </Link>
      <Flex
        style={{
          flex: "0 0 2rem",
          justifyContent: "flex-end",
        }}
      >
        {isCurrentEpisode ? (
          <PlayButton />
        ) : (
          <SetEpisodeButton episode={episode} />
        )}
      </Flex>
    </Flex>
  )
}

export default EpisodeListItem

// const EpisodeListItem = React.memo(
//   ({ episode, isCurrentEpisode }) => {
//     console.log("episode list item render")
//     return (
//       <Flex sx={episodeItem}>
//         <Link to={`/${episode.fields.url}`}>
//           <Text variant="label">Episode #{episode.frontmatter.number}</Text>
//           <Heading as="h4" variant="h4">
//             {episode.frontmatter.title}
//           </Heading>
//         </Link>
//         <Flex>
//           {/* {isCurrentEpisode ? (
//             <PlayButton />
//           ) : (
//             <SetPlayButton episode={episode} />
//           )} */}
//           <SetPlayButton episode={episode} />
//         </Flex>
//       </Flex>
//     )
//   },
//   (prevProps, nextProps) => {
//     const val =
//       (!prevProps.isCurrentEpisode && prevProps.isCurrentEpisode !== null) ||
//       !nextProps.isCurrentEpisode
//     console.log("memoization: ", val)
//     return val
//   }
// )
