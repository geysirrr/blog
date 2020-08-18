import React from "react"

import { Link } from "gatsby"

import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core"

const BlogList = ({ blogs }) => {
  return (
    <List>
      {blogs.map(
        (
          {
            node: {
              frontmatter: { title, date, subject, image },
              fields: { slug },
            },
          },
          index,
          array
        ) => (
          <React.Fragment key={index}>
            <ListItem button component={Link} to={`/blog/${slug}`}>
              <ListItemAvatar>
                <Avatar
                  alt={subject}
                  src={`../../../images/subject/${image}`}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {date}
                    </Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
            {index !== array.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        )
      )}
    </List>
  )
}

export default BlogList
