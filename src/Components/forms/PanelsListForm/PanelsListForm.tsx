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
      pcs: { value: number }
    }
    console.log(formElements)
    onAddPanelToList({
      id: nanoid(),
      height: formElements.height.value,
      width: formElements.width.value,
      pcs: formElements.pcs.value,
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
      <Typography>Add Panel:</Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          id="height"
          label="height"
          variant="filled"
          type={"number"}
          inputProps={{ max: 1700, min: 70 }}
          required
        />
        <TextField
          id="width"
          label="width"
          variant="filled"
          type={"number"}
          inputProps={{ max: 1700, min: 70 }}
          required
        />
        <TextField
          id="pcs"
          label="pcs"
          variant="filled"
          type={"number"}
          defaultValue={1}
          inputProps={{ max: 500, min: 1 }}
          required
        />
        <Button type="submit">Add</Button>
      </Box>
    </Box>
  )
}

export default PanelsListForm
