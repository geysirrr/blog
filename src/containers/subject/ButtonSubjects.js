import React from "react"
import { useSelector, useDispatch } from "react-redux"
import * as blogAction from "../../actions/blogAction"

import { ButtonGroup, Button } from "@material-ui/core"

const ButtonSubjects = ({ subjects }) => {
  const dispatch = useDispatch()

  const clickSubjectButton = checked => e => {
    dispatch(
      blogAction.setCheckedSubject({
        title: e.currentTarget.value,
        checked: !checked,
      })
    )
    dispatch(blogAction.setSubjectsByCheckedSubject())
  }

  return (
    <ButtonGroup>
      {subjects.map(({ title, checked }, index) => (
        <Button
          key={index}
          variant={checked ? "contained" : ""}
          color={checked ? "primary" : ""}
          onClick={clickSubjectButton(checked)}
          value={title}
        >
          {title}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default ButtonSubjects
