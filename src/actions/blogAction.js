import { useStaticQuery } from "gatsby"

import { useBlogs } from "../hooks/useBlogs"

export const GET_BLOGS = "GET_BLOGS"
export const GET_SUBJECTS = "GET_SUBJECTS"
export const SET_CHECKED_SUBJECT = "SET_CHECKED_SUBJECT"

export const getBlogs = data => ({
  type: GET_BLOGS,
  payload: data,
})

export const getSubjects = () => ({
  type: GET_SUBJECTS,
})

export const setCheckedSubject = checkedSubject => ({
  type: SET_CHECKED_SUBJECT,
  payload: checkedSubject,
})
