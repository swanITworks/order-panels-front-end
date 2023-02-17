import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material"
import { Outlet, useNavigate } from "react-router"
import NewQuotationForm from "../Components/forms/NewQuontationForm/NewQuotationForm"
import ViewLoader from "../Components/UI/ViewLoader"
import { useViewsContent } from "../hooks/useViewsContent"
import { useGetUserDataByAuth0IdQuery } from "../services/user"

const NewQuotation: React.FC = () => {
  const { user } = useAuth0()
  const auth0UserId: string = user?.sub!
  const { data, error, isLoading } = useGetUserDataByAuth0IdQuery(auth0UserId)

  //const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur")
  const { title } = useViewsContent("newQuontation")

  const navigate = useNavigate()

  const onClickGoQuotation = () => {
    navigate("/quontations/new/12345")
  }

  if (isLoading) {
    return <ViewLoader />
  }

  return (
    <div>
      <p>{title}</p>
      <p>choose material</p>
      <NewQuotationForm />
      {/* {JSON.stringify(user)}
      {JSON.stringify(data)} */}
    </div>
  )
}

export default NewQuotation
