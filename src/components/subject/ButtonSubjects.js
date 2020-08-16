import React from "react"
import { useSelector, useDispatch } from "react-redux"
import * as blogAction from "../../actions/blogAction"

import { ButtonGroup, Button } from "@material-ui/core"

const ButtonSubjects = ({ subjects }) => {
  const dispatch = useDispatch()

  const clickSubjectButton = e => {
    dispatch(blogAction.setCheckedSubject(e.currentTarget.value))
  }

  return (
    <ButtonGroup>
      {subjects.map(({ title, checked }, index) => (
        <Button
          key={index}
          variant={checked ? "contained" : ""}
          color={checked ? "primary" : ""}
          onClick={clickSubjectButton}
          value={title}
        >
          {title}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default ButtonSubjects
