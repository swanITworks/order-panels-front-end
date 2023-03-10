import { Typography, Box } from "@mui/material"

import React from "react"
import NewQuotationForm from "../forms/NewQuontationForm/NewQuotationForm"

interface Props {}

const ChooseMaterialSection: React.FC<Props> = () => {
  return (
    <Box component={"article"} marginY={4} marginLeft={2}>
      <Typography marginY={2} component={"h3"} variant={"h6"}>
        Choose Material Section
      </Typography>
      <NewQuotationForm />
    </Box>
  )
}

export default ChooseMaterialSection
