// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import React from "react"
// import { graphql } from "gatsby"
// import { useBreakpointIndex } from "@theme-ui/match-media"
// import SimpleBar from "simplebar-react"

// import { Box } from "ui"
// import SEO from "../../components/SEO"
// import Episode from "../../components/Episode"
// import EpisodeListing from "../../components/EpisodeListing"

// const EpisodeTemplate = ({ data, location }) => {
//   const breakpoint = useBreakpointIndex()
//   return (
//     <>
//       <SEO title="Home" />

//       {(breakpoint > 1 || location.pathname === "/") && (
//         <Box sx={episodesContainer}>
//           <SimpleBar style={{ height: "100%" }}>
//             <EpisodeListing />
//           </SimpleBar>
//         </Box>
//       )}
//       {(breakpoint > 1 ||
//         location.pathname.substring(1, 9) === "/episodes") && (
//         <Box sx={{ gridArea: "content", overflowY: "hidden" }}>
//           <SimpleBar style={{ height: "100%" }}>
//             <Episode
//               sx={{ overflowY: "auto", gridArea: "content" }}
//               episode={data.mdx}
//             />
//           </SimpleBar>
//         </Box>
//       )}
//     </>
//   )
// }

// export default EpisodeTemplate

// export const episodeQuery = graphql`
//   query episodeQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       body
//       frontmatter {
//         number
//         title
//         date
//         url
//       }
//     }
//   }
// `
