import { useStaticQuery } from "gatsby"

import { useBlogs } from "../hooks/useBlogs"

export const SET_CHECKED_SUBJECT = "SET_CHECKED_SUBJECT"
export const SET_SUBJECTS_BY_CHECKED_SUBJECT = "SET_SUBJECTS_BY_CHECKED_SUBJECT"

export const setCheckedSubject = ({ title, checked }) => ({
  type: SET_CHECKED_SUBJECT,
  payload: {
    title,
    checked,
  },
})

export const setSubjectsByCheckedSubject = () => ({
  type: SET_SUBJECTS_BY_CHECKED_SUBJECT,
})
