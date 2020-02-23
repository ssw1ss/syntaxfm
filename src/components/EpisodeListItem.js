/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Link, Heading, Text } from "ui"
import { PlayButton, SetEpisodeButton } from "./PlayButton"

const episodeItem = {
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  px: [3, 4, 3],
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
  return (
    <Flex sx={episodeItem} {...props}>
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
