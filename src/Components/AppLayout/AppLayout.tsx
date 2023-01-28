import { Alert, AppBar, Box, Drawer, Typography } from "@mui/material"
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import SideDrawer from "./SideDrawer/SideDrawer"
import TopBar from "./TopBar/TopBar"
import type { RootState } from "../../store/store"
import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { appActions } from "../../store/App/app-slice"
import { useAuth0 } from "@auth0/auth0-react"
import { userActions } from "../../store/User/user-slice"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const AppLayout: React.FC<{ props?: string }> = ({ props }) => {
  // const appState = useSelector((state: RootState) => state.app)
  // const dispatch = useDispatch()
  // const { errors } = appState

  // const { getAccessTokenSilently } = useAuth0()

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const accessToken = await getAccessTokenSilently()
  //       dispatch(userActions.setToken(accessToken))
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }

  //   getToken()
  // }, [getAccessTokenSilently])

  // useEffect(() => {
  //   if (errors.length > 0) {
  //     const setTimer = setTimeout(() => {
  //       dispatch(appActions.clearErrors())
  //     }, 4000)
  //     return () => clearTimeout(setTimer)
  //   }
  // }, [errors])

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      <SideDrawer />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {/* {errors.length > 0 &&
          errors.map((error, index) => (
            <Alert key={error + index} severity="error">
              {error}
            </Alert>
          ))} */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default AppLayout
