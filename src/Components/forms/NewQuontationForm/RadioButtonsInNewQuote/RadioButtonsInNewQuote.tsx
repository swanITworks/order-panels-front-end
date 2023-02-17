import { RadioGroup } from "@mui/material"
import React from "react"
import { IMaterial } from "../../../../interfaces/interfaces"
import { createMaterialObject } from "../../../../utils/utils"
import RadioButtonForNewQuote from "./RadioButtonForNewQuote/RadioButtonForNewQuote"

type Props = {}

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

const RadioButtonsInNewQuote = (props: Props) => {
  const materialsJSXElements = MATERIALS_DATA.map(materialItem => {
    const { materialName, id } = materialItem

    return <RadioButtonForNewQuote key={id} />
  })

  return (
    <RadioGroup
      row
      aria-labelledby="demo-form-control-label-placement"
      name="position"
      defaultValue="top"
    >
      {materialsJSXElements}
    </RadioGroup>
  )
}

export default RadioButtonsInNewQuote
