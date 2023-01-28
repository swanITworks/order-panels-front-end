import { Button } from "@mui/material"
import { Outlet } from "react-router"
import { UseCurrentContent } from "../hooks/useCurrentContent"

const Dashboard: React.FC = () => {
  const titleContent = UseCurrentContent("home", "title")
  return (
    <div>
      <Outlet />
      <p>{titleContent}</p>
      <div>
        <Button variant="contained">Wycen koszt wykonania frontow</Button>
      </div>
    </div>
  )
}

export default Dashboard
