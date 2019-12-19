import { css } from "@emotion/core"

const globalCSS = css`
  * {
    box-sizing: border-box;
  }
  body {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 15px;
    @media (min-width: 42rem) {
      font-size: 16px;
    }
    @media (min-width: 70rem) {
      font-size: 17px;
    }
  }
  .simplebar-scrollbar:before {
    background: #7f7f7f;
    opacity: 0.2;
  }
`

export default globalCSS
