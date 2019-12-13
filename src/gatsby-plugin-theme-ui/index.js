const body = {
  fontFamily: "body",
  lineHeight: "body",
  fontWeight: "normal",
  color: "text",
}
const heading = {
  my: 0,
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "medium",
  color: "heading",
}

const colors = {
  white: "#F5F2F5",
  lightGray: "#D8D5D8",
  midGray: "#B8B5B8",
  gray: "#928E92",
  darkGray: "#373437",
  black: "#1F1A1F",
  yellow: "#fec514",
}
const fonts = {
  inter:
    "Inter var, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  worksans:
    "Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  firamono: "Fira Mono, Consolas, Monaco, Courier New, Courier, monospace",
}

export default {
  breakpoints: ["30rem", "45rem", "56rem", "70rem", "90rem"],
  colors: {
    ...colors,
    text: colors.lightGray,
    heading: colors.white,
    background: colors.black,
    backgroundSubtle: colors.darkGray,
    gray: colors.gray,
    contrast: colors.white,
    primary: colors.yellow,
  },
  fonts: {
    body: fonts.inter,
    heading: fonts.worksans,
    mono: fonts.firamono,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: ["1.65rem", "1.5rem", "1.25rem", "1rem", "0.875rem", ".75rem"],
  lineHeights: {
    body: "1.5",
    heading: "1.2",
  },
  styles: {
    root: {
      ...body,
      bg: "background",
      p: { m: 0, p: 0, mb: "1rem" },
      ul: { my: 0, ml: "1.25rem", p: 0 },
      li: { pb: ".6rem" },
    },
    h1: { ...heading, fontSize: 0 },
    h2: { ...heading, fontSize: 1, mt: "3rem", mb: ".75rem" },
    h3: { ...heading, fontSize: 2 },
    h4: { ...heading, fontSize: 3 },
    h5: { ...heading, fontSize: 4 },
    h6: { ...heading, fontSize: 5 },
  },
  layout: {
    header: {
      display: "block",
    },
  },
  text: {
    h1: { ...heading, fontSize: 0 },
    h2: { ...heading, fontSize: 1 },
    h3: { ...heading, fontSize: 2 },
    h4: { ...heading, fontSize: 3 },
    h5: { ...heading, fontSize: 4 },
    h6: { ...heading, fontSize: 5 },
    label: {
      fontFamily: "mono",
      letterSpacing: ".025rem",
      color: "gray",
      fontSize: 5,
    },
    tabular: {
      fontFamily: "body",
      fontFeatureSettings: "'tnum' 1",
    },
    timestamp: {
      display: "inline",
      fontSize: 4,
      cursor: "pointer",
      transition: "all .2s",
      bg: "backgroundSubtle",
      color: "text",
      fontFamily: "mono",
      opacity: ".85",
      padding: ".25rem .35rem",
      borderRadius: "3px",
    },
  },
  links: {
    blank: {
      textDecoration: "none",
      color: "inherit",
    },
    external: {
      color: "text",
      textDecoration: "none",
      borderBottom: "1px solid",
      borderColor: "primary",
      transition: ".2s color",
      "&:hover": { color: "heading" },
    },
    primary: {
      color: "primary",
      opacity: ".85",
      "&:hover": {
        opacity: "1",
      },
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "#fff",
      borderRadius: "l",
    },
  },
  card: {
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    bg: "#fff",
  },
}
