import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const {
    site: { siteMetData },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            tags
          }
        }
      }
    `
  )
  return siteMetData
}
