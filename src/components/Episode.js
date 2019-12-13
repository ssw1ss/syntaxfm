/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
// import { MDXProvider } from "@mdx-js/react"
// import { MDXRenderer } from "gatsby-plugin-mdx"

import { Box, Heading, Text } from "ui"
import Timestamp from "./Timestamp"

const episodeSx = {
  p: 3,
  overflow: ["inherit", "inherit", "auto"],
}

const components = { Timestamp }

// const Episode = ({ children }) => {
//   return <MDXProvider components={components}>{children}</MDXProvider>
// }

const Episode = ({ episode, ...props }) => {
  return (
    <Box sx={episodeSx} {...props}>
      <Text variant="label">
        {`Episode # ${episode.frontmatter.number} • ${episode.frontmatter.date}`}
      </Text>
      <Heading as="h2" variant="h2">
        {episode.frontmatter.title}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: episode.rawBody }} />
      {/* <MDXProvider components={components}>
        <MDXRenderer>{episode.body}</MDXRenderer>
      </MDXProvider> */}
    </Box>
  )
}

export default Episode
