import React, { ChangeEventHandler, useState } from "react"
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
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material"
import { Delete } from "@mui/icons-material"
import { height, width } from "@mui/system"

function createData(id: string, height: number, width: number) {
  return { id, height, width }
}

const rows = [
  createData("id1", 159, 696),
  createData("id2", 712, 696),
  createData("id3", 262, 16.0),
  createData("id4", 305, 3.7),
  createData("id5", 356, 16.0),
]

const label = {
  inputProps: { "aria-label": "Switch demo" },
}

interface PreviewPanelProps {
  width: number
  height: number
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ width, height }) => {
  const heighOfPreviewPanelInPx = 300
  const paddingOfPreviewPanelInPx = 10

  const maxHeighOfPanel =
    heighOfPreviewPanelInPx - 2 * paddingOfPreviewPanelInPx

  const panelHeight = height
  const panelWidth = width

  const howManyMilimmetersWeCanShowInOnePixel = maxHeighOfPanel / panelHeight

  const panelHeightInPixels =
    howManyMilimmetersWeCanShowInOnePixel * panelHeight
  const panelWidthInPixels = howManyMilimmetersWeCanShowInOnePixel * panelWidth

  return (
    <Box
      sx={{
        minHeight: `${heighOfPreviewPanelInPx}px`,
        border: "1px solid black",
        my: 5,
        py: 5,
      }}
    >
      <Box
        id="edgeT"
        sx={{
          borderBottom: "3px solid black",
          width: `${panelWidthInPixels}px`,
          mx: "auto",
          mb: 2,
          textAlign: "center",
          pb: 1,
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
            borderRight: "3px solid black",
            height: `${panelHeightInPixels}px`,
            mr: 2,
            pr: 1,

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
            borderLeft: "3px solid black",
            height: `${panelHeightInPixels}px`,
            ml: 2,
            lineHeight: `${panelHeightInPixels}px`,
            pl: 1,
          }}
        >
          R
        </Box>
      </Box>
      <Box
        id="edgeB"
        sx={{
          borderTop: "3px solid black",
          width: `${panelWidthInPixels}px`,
          mx: "auto",
          mt: 2,

          textAlign: "center",
        }}
      >
        B
      </Box>
    </Box>
  )
}

const PanelsListTable = () => {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRowId(e.target.value)
  }

  const clearSelected = (): void => {
    setSelectedRowId(null)
  }

  const selectedRowData = rows.find(row => row.id === selectedRowId)

  return (
    <RadioGroup onChange={onChangeHandler}>
      <div>{JSON.stringify(selectedRowId)}</div>
      <div>{JSON.stringify(selectedRowData)}</div>
      {selectedRowId && (
        <PreviewPanel
          height={selectedRowData!.height}
          width={selectedRowData!.width}
        />
      )}
      <TableContainer component={Paper} sx={{ marginY: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "20px" }}>
                Select<Button onClick={clearSelected}>Clear</Button>
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
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge A
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge B
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge C
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Edge D
              </TableCell>
              <TableCell align="right" sx={{ width: "50px" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" sx={{ width: "20px" }}>
                  <FormControlLabel
                    value={row.id}
                    id={row.id}
                    control={<Radio />}
                    label=""
                  />
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
                <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                  <Switch {...label} defaultChecked />
                </TableCell>
                <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                  <Switch {...label} defaultChecked />
                </TableCell>
                <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                  <Switch {...label} defaultChecked />
                </TableCell>
                <TableCell align="right" sx={{ width: "50px", pr: 1 }}>
                  <Switch {...label} defaultChecked />
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </RadioGroup>
  )
}

export default PanelsListTable
