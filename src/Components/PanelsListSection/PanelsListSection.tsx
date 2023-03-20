import { Box, Card, CardContent, Typography } from "@mui/material"
import React, { useState } from "react"
import { IPanelItem } from "../../interfaces/interfaces"
import PanelsListForm from "../forms/PanelsListForm/PanelsListForm"
import PanelsListTable from "./PanelsListTable/PanelsListTable"

interface Props {}

const PanelsListSection: React.FC<Props> = () => {
  const [panelList, setPanelList] = useState<IPanelItem[]>([])

  const addPanelToList = (panelData: IPanelItem): void => {
    setPanelList(prevState => [
      ...prevState.map(item => {
        return { ...item }
      }),
      panelData,
    ])
  }

  const deletePanelFromList = (panelDataId: IPanelItem["id"]): void => {
    setPanelList(prevState => prevState.filter(item => item.id !== panelDataId))
  }

  const updatePanelItem = (updatedPanelData: IPanelItem): void => {
    const { id, height, width, edgeLeft, edgeTop, edgeRight, edgeBottom } =
      updatedPanelData
    const foundObjToUpdateIndex = panelList.findIndex(
      panelItem => panelItem.id === id
    )

    setPanelList(prevState => {
      const newState = [...prevState]
      newState[foundObjToUpdateIndex] = {
        id,
        height,
        width,
        edgeLeft,
        edgeTop,
        edgeRight,
        edgeBottom,
      }
      return [...newState]
    })
  }

  return (
    <Box component={"article"}>
      <Card>
        <CardContent>
          <Typography>Choosen material info</Typography>
        </CardContent>
      </Card>
      <Box marginY={5}>
        <PanelsListTable
          panelsData={panelList}
          onPanelUpdate={updatePanelItem}
          onPanelDelete={deletePanelFromList}
        />
        <PanelsListForm onAddPanelToList={addPanelToList} />
      </Box>
    </Box>
  )
}

export default PanelsListSection
