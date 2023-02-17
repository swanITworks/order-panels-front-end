import { FormControlLabel, Radio } from "@mui/material"
import React from "react"

type Props = {
  key: string
}

const RadioButtonForNewQuote = (props: Props) => {
  return (
    <FormControlLabel
      value="top"
      control={<Radio />}
      label="Top"
      labelPlacement="top"
    />
  )
}

export default RadioButtonForNewQuote
