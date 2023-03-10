import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { useComponentContent } from "../../../hooks/useComponetsContent"

interface Props {}

const PanelsListForm: React.FC<Props> = () => {
  const { title } = useComponentContent("panelListSection")

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>{title}</Typography>
      <Typography>Add Panel</Typography>
      <Box sx={{ display: "flex" }}>
        <TextField id="filled-basic" label="height" variant="filled" />
        <TextField id="filled-basic" label="width" variant="filled" />
        <Button type="submit">Add</Button>
      </Box>
    </Box>
  )
}

export default PanelsListForm
