import { useStaticQuery, graphql } from "gatsby"

export const useBlogs = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                image
                subject
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
  )
  return edges
}
