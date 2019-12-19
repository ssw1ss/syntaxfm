/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React, { useRef } from "react"
// import SimpleBar from "simplebar-react"
// import Div100vh from "react-div-100vh"

const Test = () => {
  const test = () => {
    document.documentElement.scrollTo({ top: 21, behavior: "smooth" })
  }
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "blue",
        overflow: "auto",
      }}
    >
      <h1 onClick={test}>Test</h1>
      {[...Array(250).keys()].map(num => (
        <h1 key={num}>Welcome to codesandbox {num}</h1>
      ))}
    </div>
  )
}

export default Test
