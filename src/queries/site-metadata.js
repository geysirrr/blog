import { graphql } from "gatsby"

export const SITE_METADATA = graphql`
  query {
    site {
      siteMetadata {
        title
        tags
      }
    }
  }
`
