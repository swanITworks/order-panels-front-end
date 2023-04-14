import { Box, Button } from "@mui/material"
import { Stack } from "@mui/system"
import React, {
  ChangeEvent,
  ChangeEventHandler,
  SyntheticEvent,
  useState,
} from "react"
import { useNavigate } from "react-router-dom"
import RadioButtonsInNewQuote from "./RadioButtonsInNewQuote/RadioButtonsInNewQuote"
import { useDispatch } from "react-redux"
import { quontationActions } from "../../../store/Quontation/quontation-slice"

type Props = {}

const NewQuotationForm = (props: Props) => {
  const [materialFormValue, setMaterialFormValue] = useState<null | string>(
    null
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onFormChangHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setMaterialFormValue(e.target.value)
  }

  const onSubmitHandler = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log("go next!")
    dispatch(quontationActions.setChoosenMaterial(materialFormValue as string))
    navigate("../panels-list")
  }

  return (
    <Box component={"form"} onSubmit={onSubmitHandler}>
      <RadioButtonsInNewQuote onFormChange={onFormChangHandler} />
      <Stack direction={"row"} sx={{ my: 2 }}>
        <Button variant="contained" type="submit" disabled={!materialFormValue}>
          Next
        </Button>
      </Stack>
    </Box>
  )
}

export default NewQuotationForm
