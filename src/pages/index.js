import React from "react"

import { useEffect, useStaticQuery } from "gatsby"

import Blog from "../components/page/blog/Blog"

const IndexPage = () => {
  // useEffect(() => {
  // const a = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               date
  //               image
  //               subject
  //             }
  //             html
  //             excerpt
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   return data
  // }
  // console.log(data)
  // }, [])

  return <Blog></Blog>
}

export default IndexPage
