import React from "react"
import Header from "../header/Header"

import { Container } from "@material-ui/core"

import classes from "./layout.module.scss"

const Layout = ({ children }) => {
  console.log(classes)
  return (
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
    </>
  )
}

export default Layout
