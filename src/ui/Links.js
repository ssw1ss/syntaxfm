/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Link as LinkEl } from "@theme-ui/components"

export const Link = props => {
  return <GatsbyLink {...props} />
}

export const ExternalLink = props => {
  return <LinkEl {...props} />
}

Link.defaultProps = {
  sx: { variant: "links.blank" },
}
ExternalLink.defaultProps = {
  variant: "blank",
}
