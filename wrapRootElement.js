// /** @jsx jsx */
// import { jsx, ThemeProvider, ThemeStateProvider, ColorMode } from "theme-ui"
// import React from "react"

// import Layout from "./src/ui/Layout"
// // import { AudioProvider } from "./src/context/AudioProvider"
// // import { EpisodeProvider } from "./src/context/EpisodeProvider"
// import theme from "./src/gatsby-plugin-theme-ui/index.js"

// const components = {}

// const hasColorModes = t =>
//   t.colors && t.colors.modes && Object.keys(t.colors.modes).length

// export const wrapRootElement = ({ element }) => {
//   return jsx(
//     ThemeStateProvider,
//     { theme },
//     jsx(
//       ThemeProvider,
//       {
//         components,
//       },
//       hasColorModes(theme) &&
//         jsx(ColorMode, {
//           key: "theme-ui-color-mode",
//         }),
//       // <EpisodeProvider>
//       //   <AudioProvider>
//       <Layout>{React.cloneElement(element, { key: "element" })}</Layout>
//       //   </AudioProvider>
//       // </EpisodeProvider>
//     )
//   )
// }
