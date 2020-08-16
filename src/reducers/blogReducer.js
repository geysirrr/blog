import {
  GET_BLOGS,
  GET_SUBJECTS,
  SET_CHECKED_SUBJECT,
} from "../actions/blogAction"

const initialState = {
  blogs: [],
  subjects: [],
  checkedSubjects: [],
}

export default (state = initialState, { type, payload }) => {
  return (
    {
      [SET_CHECKED_SUBJECT]: {
        ...state,
        checkedSubjects: state.checkedSubjects.includes(payload)
          ? state.checkedSubjects.filter(subject => subject !== payload)
          : state.checkedSubjects.concat(payload),
      },
    }[type] || state
  )
}
