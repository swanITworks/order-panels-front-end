import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material"
import { Outlet, useNavigate } from "react-router"
import ViewLoader from "../Components/UI/ViewLoader"
import { useViewsContent } from "../hooks/useViewsContent"
import { useGetUserDataByAuth0IdQuery } from "../services/user"

const Dashboard: React.FC = () => {
  const { user } = useAuth0()
  const auth0UserId: string = user?.sub!
  const { data, error, isLoading } = useGetUserDataByAuth0IdQuery(auth0UserId)

  //const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur")
  const { title } = useViewsContent("home")

  const navigate = useNavigate()

  const onClickGoQuontation = () => {
    console.log("create quontation in db")
    navigate("/quotations/new/12345/choose-material")
  }

  if (isLoading) {
    return <ViewLoader />
  }

  return (
    <div>
      <Outlet />
      <p>{title}</p>
      <div>
        <Button onClick={onClickGoQuontation} variant="contained">
          Wycen koszt wykonania frontow
        </Button>
      </div>
      {/* {JSON.stringify(user)}
      {JSON.stringify(data)} */}
    </div>
  )
}

export default Dashboard
