import React from "react"
import { Link } from "gatsby"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import Links from "../link/links"

import headerStyles from "./header.module.scss"

const Header = () => {
  const links = [
    {
      className: headerStyles.navItem,
      activeClassName: headerStyles.activeNavItem,
      to: "/",
      title: "Home",
    },
    {
      className: headerStyles.navItem,
      activeClassName: headerStyles.activeNavItem,
      to: "/blog",
      title: "Blog",
    },
    {
      className: headerStyles.navItem,
      activeClassName: headerStyles.activeNavItem,
      to: "/about",
      title: "About",
    },
    {
      className: headerStyles.navItem,
      activeClassName: headerStyles.activeNavItem,
      to: "/contact",
      title: "Contact",
    },
  ]

  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <Link className={headerStyles.home} to="/">
            GeySirrr
          </Link>
        </IconButton>
        <Typography style={{ marginLeft: "3rem" }}>
          <Links links={links} />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
