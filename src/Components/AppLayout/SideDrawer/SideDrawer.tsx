import * as React from "react"
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/store"
import { useDispatch } from "react-redux"
import { appActions } from "../../../store/App/app-slice"
import { NavLink } from "react-router-dom"
import {
  Dashboard,
  Factory,
  LiveHelp,
  Settings,
  StickyNote2,
  Webhook,
} from "@mui/icons-material"
import LogoOnDark from "../../UI/Logo/LogoOnDark"
import LogoOnBright from "../../UI/Logo/LogoOnBright"

const drawerWidth = 240

const researchSections: {
  sectionName: string
  path: string
  icon: JSX.Element
}[] = [
  {
    sectionName: "Dashboard",
    path: "/dasborad",
    icon: <Dashboard />,
  },
  {
    sectionName: "Wyceny",
    path: "/offers",
    icon: <Webhook />,
  },
  {
    sectionName: "Zamówienia",
    path: "orders",
    icon: <Factory />,
  },
  {
    sectionName: "Twoje dane",
    path: "account-data",
    icon: <Factory />,
  },
]

const overallSections: {
  sectionName: string
  path: string
  icon: JSX.Element
}[] = [
  // {
  //   sectionName: "Notes",
  //   path: "notes",
  //   icon: <StickyNote2 />,
  // },
  // {
  //   sectionName: "FAQ",
  //   path: "faq",
  //   icon: <LiveHelp />,
  // },
  // {
  //   sectionName: "Settings",
  //   path: "settings",
  //   icon: <Settings />,
  // },
]

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

export default function SideDrawer() {
  const theme = useTheme()
  const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.app.isLeftMenuExtended)

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: theme.palette.text.primary,
  }

  const activeLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: theme.palette.text.primary,
    background: theme.palette.grey[200],
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <LogoOnBright />
        <IconButton onClick={() => dispatch(appActions.unExtendLeftMenu())}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {researchSections.map((section, index) => {
          const { sectionName, path, icon } = section

          return (
            <ListItem
              key={path + index}
              disablePadding
              sx={{ display: "block" }}
            >
              <NavLink
                to={sectionName.toLowerCase()}
                style={({
                  isActive,
                }: {
                  isActive: Boolean
                }): React.CSSProperties => {
                  if (isActive) {
                    return activeLinkStyle
                  }
                  return linkStyle
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    background: "inherit",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon ? (
                      icon
                    ) : index % 2 === 0 ? (
                      <InboxIcon />
                    ) : (
                      <MailIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={sectionName}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List>
        {overallSections.map((section, index) => {
          const { sectionName, path, icon } = section
          return (
            <ListItem
              key={path + index}
              disablePadding
              sx={{ display: "block" }}
            >
              <NavLink
                to={path.toLowerCase()}
                style={({
                  isActive,
                }: {
                  isActive: Boolean
                }): React.CSSProperties => {
                  if (isActive) {
                    return activeLinkStyle
                  }
                  return linkStyle
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    background: "inherit",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon ? (
                      icon
                    ) : index % 2 === 0 ? (
                      <InboxIcon />
                    ) : (
                      <MailIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={sectionName}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}
