import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

import "fontsource-roboto"

import { Container } from "@material-ui/core"

const Layout = props => {
  return (
    <>
      <Header />
      <Container>
        {props.children}
        <Footer />
      </Container>
    </>
  )
}

export default Layout
