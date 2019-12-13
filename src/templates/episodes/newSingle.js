/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SimpleBar from "simplebar-react"

import { Box, Heading, Flex, ExternalLink, Text } from "ui"
import Timestamp from "../../components/Timestamp"
import { useSetEpisodeOnClick } from "../../components/PlayButton"

const episodeButton = {
  cursor: "pointer",
  mr: ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "2rem"],
  pb: ".25rem",
  fontSize: [4, 4, 4, 4, 3],
  borderBottom: "1px solid",
  borderColor: "gray",
  opacity: ".85",
  "&:hover": {
    opacity: 1,
  },
}

const EpisodeSingle = ({ data }) => {
  const { body, fileAbsolutePath, frontmatter } = data.mdx
  const filename = fileAbsolutePath
    .split("/")
    .pop()
    .slice(0, -1)
  const components = {
    del: props => <Timestamp number={frontmatter.number} {...props} />,
    a: props => (
      <a target="_blank" sx={{ variant: "links.external" }} {...props} />
    ),
  }
  const onClick = useSetEpisodeOnClick(data.mdx)
  const date = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
  return (
    <SimpleBar style={{ height: "100%" }}>
      <Box
        sx={{
          px: ["1rem", "1rem", "2rem", "3rem"],
          py: ["1rem", "1rem", "2rem"],
        }}
      >
        <Text variant="label" style={{ fontSize: "1rem" }}>
          {`Episode #${frontmatter.number} • ${date}`}
        </Text>
        <Heading as="h1" variant="h2">
          {frontmatter.title}
        </Heading>
        <Flex
          style={{
            marginBottom: "1rem",
            flexWrap: "wrap",
            padding: "1.75rem 0 .75rem 0",
          }}
        >
          <Text sx={episodeButton} {...onClick}>
            👉 Play Episode
          </Text>
          <ExternalLink sx={episodeButton} href={frontmatter.url}>
            👇 Download Show
          </ExternalLink>
          <ExternalLink
            sx={episodeButton}
            href={`https://github.com/wesbos/Syntax/edit/master/shows/${filename}`}
          >
            📒 Edit Show Notes
          </ExternalLink>
        </Flex>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </SimpleBar>
  )
}

export default EpisodeSingle

export const newEpisodeQuery = graphql`
  query newEpisodeQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        url
        number
        title
        date
      }
    }
  }
`
