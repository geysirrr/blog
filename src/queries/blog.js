import { graphql } from "gatsby"

export const BLOGS = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            image
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
