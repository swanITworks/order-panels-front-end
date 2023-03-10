import { Box, Card, CardContent, Typography } from "@mui/material"
import React from "react"
import PanelsListForm from "../forms/PanelsListForm/PanelsListForm"
import PanelsListTable from "./PanelsListTable/PanelsListTable"

interface Props {}

const PanelsListSection: React.FC<Props> = () => {
  return (
    <Box component={"article"}>
      <Card>
        <CardContent>
          <Typography>Choosen material info</Typography>
        </CardContent>
      </Card>
      <Box marginY={5}>
        <PanelsListTable />
        <PanelsListForm />
      </Box>
    </Box>
  )
}

export default PanelsListSection
