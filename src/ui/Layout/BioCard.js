/** @jsx jsx */
import { jsx } from "theme-ui"

import { Box, Flex, ExternalLink, Image, Text } from "ui"

const info = {
  alignItems: "center",
}
const imgsx = {
  width: "4rem",
  height: "4rem",
  borderRadius: "4rem",
  bg: "backgroundSubtle",
  mr: ".75rem",
}

const BioCard = ({ img, name, twitter, children }) => {
  return (
    <Box style={{ margin: "1.5rem 0" }}>
      <Flex sx={info}>
        <Box>
          <Image sx={imgsx} src={img} />
        </Box>
        <Box>
          <Text>{name}</Text>
          <ExternalLink
            variant="primary"
            href={`https://twitter.com/${twitter}`}
            target="_blank"
          >
            {twitter}
          </ExternalLink>
        </Box>
      </Flex>
      <Text sx={{ paddingTop: ".5rem", textAlign: "left", fontSize: 4 }}>
        {children}
      </Text>
    </Box>
  )
}

export default BioCard
