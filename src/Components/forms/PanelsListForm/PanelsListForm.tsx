import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useRef, useState } from "react"
import { useComponentContent } from "../../../hooks/useComponetsContent"
import { IPanelItem } from "../../../interfaces/interfaces"
import { nanoid } from "nanoid"

interface Props {
  onAddPanelToList: (panelData: IPanelItem) => void
}

const PanelsListForm: React.FC<Props> = ({ onAddPanelToList }) => {
  const { title } = useComponentContent("panelListSection")

  const formRef = useRef<HTMLFormElement>()

  const resetForm = (): void => {
    formRef.current?.reset()
  }

  const onSubmitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      height: { value: number }
      width: { value: number }
    }
    console.log(formElements)
    onAddPanelToList({
      id: nanoid(),
      height: formElements.height.value,
      width: formElements.width.value,
      edgeBottom: true,
      edgeLeft: true,
      edgeRight: true,
      edgeTop: true,
    })
    resetForm()
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      onSubmit={onSubmitHandler}
      ref={formRef}
    >
      <Typography>{title}</Typography>
      <Typography>Add Panel</Typography>
      <Box sx={{ display: "flex" }}>
        <TextField id="height" label="height" variant="filled" />
        <TextField id="width" label="width" variant="filled" />
        <Button type="submit">Add</Button>
      </Box>
    </Box>
  )
}

export default PanelsListForm
