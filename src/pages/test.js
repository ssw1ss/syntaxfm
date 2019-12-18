/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React, { useState, useCallback } from "react"
// import SimpleBar from "simplebar-react"
// import Div100vh from "react-div-100vh"

const Test = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "salmon",
        overflow: "auto",
      }}
    >
      {[...Array(250).keys()].map(num => (
        <h1 key={num}>Welcome to codesandbox {num}</h1>
      ))}
    </div>
  )
}

export default Test
