import { useAuth0 } from "@auth0/auth0-react"
import { Box, IconButton } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"

import React from "react"

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <IconButton onClick={() => logout()}>
      <LogoutIcon color="action" fontSize="large" />
    </IconButton>
  )
}

export default LogoutButton
