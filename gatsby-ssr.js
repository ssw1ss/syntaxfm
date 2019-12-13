import React from "react"
import "typeface-inter"
import "typeface-work-sans"
import "typeface-fira-mono"
import "normalize.css"
import "simplebar/dist/simplebar.min.css"

import Layout from "./src/ui/Layout"
import { AudioProvider } from "./src/context/AudioProvider"
import { EpisodeProvider } from "./src/context/EpisodeProvider"

export const wrapPageElement = ({ element, props: { location } }) => {
  return <Layout location={location}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <EpisodeProvider>
      <AudioProvider>{element}</AudioProvider>
    </EpisodeProvider>
  )
}

// PREVIOUSLY WORKING THEME-UI STUFF
// import { jsx, InitializeColorMode } from "theme-ui"

// export { wrapRootElement } from "./wrapRootElement"

// export const onRenderBody = ({ setPreBodyComponents }) => {
//   setPreBodyComponents([jsx(InitializeColorMode, { key: "theme-ui-no-flash" })])
// }
