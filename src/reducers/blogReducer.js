import {
  SET_CHECKED_SUBJECT,
  SET_SUBJECTS_BY_CHECKED_SUBJECT,
} from "../actions/blogAction"

const initialState = {
  blogs: [],
  subjects: [
    { title: "ALL", checked: true },
    { title: "Javascript", checked: false },
    { title: "NodeJS", checked: false },
    { title: "ReactJS", checked: false },
    { title: "GatsbyJS", checked: false },
    { title: "Spring", checked: false },
  ],
  checkedSubjects: ["ALL"],
}

const ALL = "ALL"

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHECKED_SUBJECT: {
      const { title, checked } = payload
      const { checkedSubjects } = state

      return {
        ...state,
        checkedSubjects: checked
          ? title === ALL
            ? [ALL]
            : [...checkedSubjects, title].filter(subject => subject !== ALL)
          : checkedSubjects.filter(subject => subject !== title),
      }
    }
    case SET_SUBJECTS_BY_CHECKED_SUBJECT: {
      return {
        ...state,
        subjects: state.subjects.map(({ title }) => ({
          title,
          checked: state.checkedSubjects.includes(title),
        })),
      }
    }
    default:
      return state
  }
}
