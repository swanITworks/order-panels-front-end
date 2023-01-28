import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material"
import { Outlet } from "react-router"
import ViewLoader from "../Components/UI/ViewLoader"
import { UseCurrentContent } from "../hooks/useCurrentContent"
import { useGetUserByAuth0IdQuery } from "../services/user"

const Dashboard: React.FC = () => {
  const { user } = useAuth0()
  const auth0UserId: string = user?.sub!
  const { data, error, isLoading } = useGetUserByAuth0IdQuery(auth0UserId)

  //const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur")
  const titleContent = UseCurrentContent("home", "title")

  if (isLoading) {
    return <ViewLoader />
  }

  return (
    <div>
      <Outlet />
      <p>{titleContent}</p>
      <div>
        <Button variant="contained">Wycen koszt wykonania frontow</Button>
      </div>
      {JSON.stringify(user)}
      {JSON.stringify(data)}
    </div>
  )
}

export default Dashboard
