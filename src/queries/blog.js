import { graphql } from "gatsby"

export const ALL_MARKDOWN_REMARK = graphql`
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
