import React from "react"
import { Link } from "gatsby"

const Links = ({ links }) => {
  return links.map(({ className, activeClassName, to, title }, index) => (
    <Link
      className={className}
      activeClassName={activeClassName}
      to={to}
      key={index}
    >
      {title}
    </Link>
  ))
}

export default Links
