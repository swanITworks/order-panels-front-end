import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { IPanelItem } from "../../interfaces/interfaces"
import PanelsListForm from "../forms/PanelsListForm/PanelsListForm"
import PanelsListTable from "./PanelsListTable/PanelsListTable"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"

interface Props {}

const PanelsListSection: React.FC<Props> = () => {
  const [panelList, setPanelList] = useState<IPanelItem[]>([])

  const { choosenMaterial } = useAppSelector(state => state.quontation)

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
    const { id, height, width, pcs, edgeLeft, edgeTop, edgeRight, edgeBottom } =
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
        pcs,
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
      <Typography>Choosen material info:</Typography>
      <Typography>{choosenMaterial}</Typography>
      <Box marginY={5}>
        <PanelsListForm onAddPanelToList={addPanelToList} />
        <Typography>Panels list:</Typography>
        <PanelsListTable
          panelsData={panelList}
          onPanelUpdate={updatePanelItem}
          onPanelDelete={deletePanelFromList}
        />
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button>SAVE Quontation</Button>
          <Button>Order</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default PanelsListSection
