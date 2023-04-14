import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@mui/material"
import { NavLink } from "react-router-dom"

export default function TopBar() {
  const theme = useTheme()

  const researchSections: {
    sectionName: string
    path: string
  }[] = [
    {
      sectionName: "Dashboard",
      path: "/dashboard",
    },
    {
      sectionName: "Quantations",
      path: "/offers",
    },
    {
      sectionName: "Orders",
      path: "/orders",
    },
    {
      sectionName: "Your data",
      path: "/account-data",
    },
  ]

  const linksJSXelements = researchSections.map((linkItem, index) => {
    const { path, sectionName } = linkItem
    return (
      <NavLink key={`${path}_${index}`} to={path}>
        {sectionName}
      </NavLink>
    )
  })

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Toolbar sx={{ bgcolor: theme.palette.secondary.light }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: "auto",
          }}
        >
          {linksJSXelements}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
