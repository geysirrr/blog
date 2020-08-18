import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { useStaticQuery } from "gatsby"
import { useBlogs } from "../../hooks/useBlogs"
import ButtonSubjects from "../subject/ButtonSubjects"
import BlogList from "../../components/blog/BlogList"

import * as blogAction from "../../actions/blogAction"

import App from "../../App"

import { Box } from "@material-ui/core"

const Blog = () => {
  const dispatch = useDispatch()
  const blogs = useBlogs()
  const { subjects, checkedSubjects } = useSelector(store => store.blogReducer)

  const filteredBlogsBySubject = checkedSubjects.includes("ALL")
    ? blogs
    : blogs.filter(({ node: { frontmatter: { subject } } }) =>
        checkedSubjects.includes(subject)
      )

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

      <BlogList blogs={filteredBlogsBySubject} />
    </App>
  )
}

export default Blog
