import { FormControlLabel, Radio } from "@mui/material"
import React from "react"
import { IMaterial } from "../../../../../interfaces/interfaces"

type Props = {
  matetrialData: IMaterial
}

const RadioButtonForNewQuote = ({ matetrialData }: Props) => {
  const { materialName, id } = matetrialData
  return (
    <FormControlLabel
      value={id}
      control={<Radio />}
      label={materialName}
      labelPlacement="top"
    />
  )
}

export default RadioButtonForNewQuote
