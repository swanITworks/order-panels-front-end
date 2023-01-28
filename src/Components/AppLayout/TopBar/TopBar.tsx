import * as React from "react"
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

import { useSelector } from "react-redux"
import type { RootState } from "../../../store/store"
import { useDispatch } from "react-redux"
import { appActions } from "../../../store/App/app-slice"
import LogoOnDark from "../../UI/Logo/LogoOnDark"
import { Alert, Button, LinearProgress } from "@mui/material"
import LogoOnBright from "../../UI/Logo/LogoOnBright"
import LogoutButton from "../../UI/LogoutButton/LogoutButton"

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function TopBar() {
  const appState = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const { isLeftMenuExtended, isAppLoading, errors } = appState

  const extendDrawer = (): void => {
    dispatch(appActions.extendLeftMenu())
  }

  return (
    <AppBar position="fixed" open={isLeftMenuExtended}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={extendDrawer}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isLeftMenuExtended && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ textAlign: "right", width: "100%" }}>
          <LogoutButton />
        </Box>

        {/* <Typography variant="h6" noWrap component="div">
          EthicsInsider
        </Typography>
        <Button
          color="secondary"
          onClick={() => dispatch(appActions.setLoadingOn())}
        >
          SET ON LOADING
        </Button>
        <Button
          color="secondary"
          onClick={() => dispatch(appActions.setLoadingOff())}
        >
          SET OFF LOADING
        </Button>
        <Button
          color="secondary"
          onClick={() => dispatch(appActions.setError("error"))}
        >
          SET ERROR
        </Button>
        <Button
          color="secondary"
          onClick={() => dispatch(appActions.clearErrors())}
        >
          CLEAR ERRORS
        </Button> */}
      </Toolbar>
      {isAppLoading && <LinearProgress color="secondary" />}
    </AppBar>
  )
}
