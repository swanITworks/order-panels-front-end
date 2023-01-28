import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material"
import { Outlet } from "react-router"
import { UseCurrentContent } from "../hooks/useCurrentContent"

const Dashboard: React.FC = () => {
  const { user } = useAuth0()
  const titleContent = UseCurrentContent("home", "title")
  return (
    <div>
      <Outlet />
      <p>{titleContent}</p>
      <div>
        <Button variant="contained">Wycen koszt wykonania frontow</Button>
      </div>
      {JSON.stringify(user)}
    </div>
  )
}

export default Dashboard
