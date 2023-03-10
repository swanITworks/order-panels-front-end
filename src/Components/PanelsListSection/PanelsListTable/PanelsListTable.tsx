import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(height: number, width: number) {
  return { height, width }
}

const rows = [
  createData(159, 696),
  createData(712, 696),
  createData(262, 16.0),
  createData(305, 3.7),
  createData(356, 16.0),
]

const PanelsListTable = () => {
  return (
    <TableContainer component={Paper} sx={{ marginY: 5 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Height &nbsp;(mm)</TableCell>
            <TableCell align="right">Width &nbsp;(mm)</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">{row.width}</TableCell>
              <TableCell align="right">Delete ICON</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PanelsListTable
