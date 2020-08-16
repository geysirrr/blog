import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useStaticQuery } from "gatsby"
import { useBlogs } from "../../hooks/useBlogs"
import ButtonSubjects from "../../components/subject/ButtonSubjects"

import * as blogAction from "../../actions/blogAction"

import App from "../../App"

import {
  Typography,
  Box,
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core"

const Blog = () => {
  const blogs = useBlogs()
  const { checkedSubjects } = useSelector(store => store.blogReducer)

  const subjects = [
    ...new Set(
      blogs.map(blog => ({
        title: blog.node.frontmatter.subject,
        checked: checkedSubjects.includes(blog.node.frontmatter.subject),
      }))
    ),
  ]

  return (
    <App>
      <Box
        marginTop={15}
        marginBottom={3}
        display="flex"
        justifyContent="center"
        bgcolor="background.paper"
      >
        {<ButtonSubjects subjects={subjects} />}
      </Box>

      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </App>
  )
}

export default Blog
