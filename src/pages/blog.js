import React from "react"

import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
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

  return (
    <Layout>
      <List className={classes.root}>
        {edges.map((edge, index) => (
          <Link
            className={classes.link}
            key={index}
            to={`/blog/${edge.node.fields.slug}`}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={edge.node.frontmatter.image} />
              </ListItemAvatar>
              <ListItemText
                className={classes.title}
                primary={edge.node.frontmatter.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {edge.node.frontmatter.date}
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
          </Link>
        ))}

        <Divider variant="inset" component="li" />
      </List>
    </Layout>
  )
}

export default BlogPage
