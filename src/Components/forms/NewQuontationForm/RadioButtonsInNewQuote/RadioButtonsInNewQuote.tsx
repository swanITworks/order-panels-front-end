import { RadioGroup } from "@mui/material"
import React, { FC, ChangeEvent } from "react"
import { IMaterial } from "../../../../interfaces/interfaces"
import { createMaterialObject } from "../../../../utils/utils"
import RadioButtonForNewQuote from "./RadioButtonForNewQuote/RadioButtonForNewQuote"

type Props = {
  onFormChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MATERIALS_DATA: IMaterial[] = [
  createMaterialObject(
    "124",
    "MDF",
    16,
    "white",
    "gloss",
    280,
    180,
    false,
    false
  ),
  createMaterialObject(
    "23131",
    "Płyta wiórowa",
    16,
    "white",
    "mat",
    280,
    180,
    false,
    false
  ),
]

const RadioButtonsInNewQuote: FC<Props> = ({ onFormChange }) => {
  const materialsJSXElements = MATERIALS_DATA.map(materialItem => {
    const { id } = materialItem

    return <RadioButtonForNewQuote key={id} matetrialData={materialItem} />
  })

  return (
    <RadioGroup
      row
      aria-labelledby="demo-form-control-label-placement"
      name="position"
      defaultValue="top"
      onChange={onFormChange}
    >
      {materialsJSXElements}
    </RadioGroup>
  )
}

export default RadioButtonsInNewQuote
