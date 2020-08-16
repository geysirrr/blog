import React from "react"
import Header from "../header/Header"

import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
