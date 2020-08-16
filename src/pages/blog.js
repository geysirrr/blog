import React from "react"

import { Link, useStaticQuery } from "gatsby"
import { ALL_MARKDOWN_REMARK } from "../queries/blog"

import { makeStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "block",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: "black",
  },
}))

const BlogPage = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
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
  `)

  const sortByDateDesc = (a, b) =>
    new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)

  const edges = data.allMarkdownRemark.edges.sort(sortByDateDesc)

  return <></>
}

export default BlogPage
