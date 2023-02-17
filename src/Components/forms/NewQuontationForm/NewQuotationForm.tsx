import { Box } from "@mui/material"
import React from "react"
import RadioButtonsInNewQuote from "./RadioButtonsInNewQuote/RadioButtonsInNewQuote"

type Props = {}

const NewQuotationForm = (props: Props) => {
  return (
    <Box component={"form"}>
      <RadioButtonsInNewQuote />
    </Box>
  )
}

export default NewQuotationForm
