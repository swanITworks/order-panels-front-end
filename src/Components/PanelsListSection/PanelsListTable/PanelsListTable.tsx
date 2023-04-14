import React, { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Switch,
  TableFooter,
} from "@mui/material"
import { Delete } from "@mui/icons-material"
import { IPanelItem } from "../../../interfaces/interfaces"
import { nanoid } from "nanoid"

const label = {
  inputProps: { "aria-label": "Switch demo" },
}

interface PreviewPanelProps {
  currentPanelData: IPanelItem
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ currentPanelData }) => {
  const { id, height, width, pcs, edgeLeft, edgeTop, edgeRight, edgeBottom } =
    currentPanelData

  const heighOfPreviewPanelInPx = 500
  const widthOfPreviewPanelInPx = 600
  const paddingOfPreviewPanelInPx = 40

  const maxHeighOfPanel =
    heighOfPreviewPanelInPx - 2 * paddingOfPreviewPanelInPx

  const maxWidthOfPanel =
    widthOfPreviewPanelInPx - 2 * paddingOfPreviewPanelInPx

  const panelHeight = height
  const panelWidth = width

  const howManyMilimmetersWeCanShowInOnePixelInHeight =
    maxHeighOfPanel / panelHeight
  const howManyMilimmetersWeCanShowInOnePixelInWidth =
    maxWidthOfPanel / panelWidth

  let sizeFactor: number

  if (
    howManyMilimmetersWeCanShowInOnePixelInHeight <=
    howManyMilimmetersWeCanShowInOnePixelInWidth
  ) {
    sizeFactor = howManyMilimmetersWeCanShowInOnePixelInHeight
  } else {
    sizeFactor = howManyMilimmetersWeCanShowInOnePixelInWidth
  }

  const panelHeightInPixels = sizeFactor * panelHeight
  const panelWidthInPixels = sizeFactor * panelWidth

  return (
    <Box
      sx={{
        height: `${heighOfPreviewPanelInPx}px`,
        p: "10px",
        width: `${widthOfPreviewPanelInPx}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        id="edgeT"
        sx={{
          borderBottom: edgeTop ? "3px solid black" : "none",
          width: `${panelWidthInPixels}px`,
          mx: "auto",
          mb: 2,
          textAlign: "center",
          pb: 1,
          height: edgeTop ? "15px" : "18px",
        }}
      >
        T
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          id="edgeL"
          sx={{
            borderRight: edgeLeft ? "3px solid black" : "none",
            height: `${panelHeightInPixels}px`,
            mr: 2,
            pr: 1,
            width: edgeLeft ? "15px" : "18px",
            lineHeight: `${panelHeightInPixels}px`,
          }}
        >
          L
        </Box>
        <Box
          id="panel"
          sx={{
            border: "1px solid black",
            height: `${panelHeightInPixels}px`,
            width: `${panelWidthInPixels}px`,
          }}
        ></Box>
        <Box
          id="edgeR"
          sx={{
            borderLeft: edgeRight ? "3px solid black" : "none",
            height: `${panelHeightInPixels}px`,
            ml: 2,
            lineHeight: `${panelHeightInPixels}px`,
            minWidth: edgeRight ? "15px" : "18px",
            pl: 1,
          }}
        >
          R
        </Box>
      </Box>
      <Box
        id="edgeB"
        sx={{
          borderTop: edgeBottom ? "3px solid black" : "none",
          width: `${panelWidthInPixels}px`,
          mx: "auto",
          mt: 2,
          textAlign: "center",
          height: edgeBottom ? "15px" : "18px",
        }}
      >
        B
      </Box>
    </Box>
  )
}

interface PanelsListProps {
  panelsData: IPanelItem[]
  onPanelUpdate: (updatedPanelData: IPanelItem) => void
  onPanelDelete: (panelDataId: IPanelItem["id"]) => void
}

const PanelsListTable: React.FC<PanelsListProps> = ({
  panelsData,
  onPanelUpdate,
  onPanelDelete,
}) => {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null)

  const pricePerSquareMeter = 150

  const sumOfSquareMeters = panelsData.reduce(
    (prev, cur) => prev + +cur.pcs * (((cur.height / 1000) * cur.width) / 1000),
    0
  )
  const sumOfPcs = panelsData.reduce((prev, cur) => prev + +cur.pcs, 0)

  const totalPrice = pricePerSquareMeter * sumOfSquareMeters

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRowId(e.target.value)
  }

  const onRowClickHandler = (rowId: IPanelItem["id"]): void => {
    setSelectedRowId(rowId)
  }

  const clearSelected = (): void => {
    setSelectedRowId(null)
  }

  const selectedRowData = panelsData.find(row => row.id === selectedRowId)

  return (
    <RadioGroup onChange={onChangeHandler} value={selectedRowId}>
      <TableContainer
        component={Paper}
        sx={{
          marginY: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Table aria-label="simple table" sx={{ maxWidth: "500px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "10px" }}>
                Select
                <Button onClick={clearSelected} sx={{ m: 0, p: 0 }}>
                  Clear
                </Button>
              </TableCell>
              <TableCell align="center" sx={{ width: "20px" }}>
                No.
              </TableCell>
              <TableCell align="right" sx={{ width: "100px" }}>
                Height &nbsp;(mm)
              </TableCell>
              <TableCell align="right" sx={{ width: "100px" }}>
                Width &nbsp;(mm)
              </TableCell>
              <TableCell align="right" sx={{ width: "100px" }}>
                Pcs
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge L
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge T
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge R
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge B
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ verticalAlign: "top" }}>
            {panelsData.map((row, index) => {
              return (
                <TableRow key={index} onClick={() => onRowClickHandler(row.id)}>
                  <TableCell
                    align="center"
                    sx={{
                      width: "10px",
                    }}
                  >
                    <Radio sx={{ m: "auto" }} value={row.id} id={row.id} />
                  </TableCell>
                  <TableCell align="center" sx={{ width: "20px" }}>
                    {index + 1}.
                  </TableCell>
                  <TableCell align="right" sx={{ width: "100px" }}>
                    {row.height}
                  </TableCell>
                  <TableCell align="right" sx={{ width: "100px" }}>
                    {row.width}
                  </TableCell>
                  <TableCell align="right" sx={{ width: "100px" }}>
                    {row.pcs}
                  </TableCell>
                  <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                    <Switch
                      {...label}
                      defaultChecked
                      onChange={() =>
                        onPanelUpdate({ ...row, edgeLeft: !row.edgeLeft })
                      }
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                    <Switch
                      {...label}
                      defaultChecked
                      onChange={() =>
                        onPanelUpdate({ ...row, edgeTop: !row.edgeTop })
                      }
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                    <Switch
                      {...label}
                      defaultChecked
                      onChange={() =>
                        onPanelUpdate({ ...row, edgeRight: !row.edgeRight })
                      }
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                    <Switch
                      {...label}
                      defaultChecked
                      onChange={() =>
                        onPanelUpdate({ ...row, edgeBottom: !row.edgeBottom })
                      }
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        onPanelDelete(row.id)
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right" sx={{ pr: 0 }}>
                Sum:
              </TableCell>
              <TableCell align="center" sx={{ pr: 0 }}>
                {sumOfPcs}
              </TableCell>
              <TableCell align="right">Surface:</TableCell>
              <TableCell align="center">
                {`${Math.round(sumOfSquareMeters * 100) / 100} m2`}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Price:
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                {`${Math.round(totalPrice * 100) / 100} PLN`}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <PreviewPanel
          currentPanelData={
            selectedRowData
              ? {
                  ...selectedRowData,
                }
              : {
                  height: 600,
                  width: 600,
                  id: nanoid(),
                  pcs: 1,
                  edgeLeft: true,
                  edgeTop: true,
                  edgeRight: true,
                  edgeBottom: true,
                }
          }
        />
      </TableContainer>
    </RadioGroup>
  )
}

export default PanelsListTable
