import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect, useRef, ReactNode } from "react"
import { createPortal } from "react-dom"
import { Dialog, Modal } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useDispatch } from "react-redux"
import { appActions } from "../../store/App/app-slice"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

interface ModalComponentProps {
  content?: ReactNode
}

function ModalComponent({ content }: ModalComponentProps) {
  const dispatch = useDispatch()

  const handleOpen = () => dispatch(appActions.setModalOpen())
  const handleClose = () => dispatch(appActions.setModalClose())

  const { isModalOpen } = useSelector((state: RootState) => state.app)

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{content}</Box>
    </Modal>
  )
}

const modalRoot = document.getElementById("overlays") as HTMLElement

interface ModalProps {
  children?: ReactNode
}

const ModalWrapper = ({ children }: ModalProps) => {
  const el = useRef(document.createElement("div"))

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current

    // We assume `modalRoot` exists with '!'
    modalRoot!.appendChild(current)
    return () => void modalRoot!.removeChild(current)
  }, [])

  return createPortal(children, el.current)
}

interface MyModalProps {
  children?: ReactNode
}

const MyModal = ({ children }: MyModalProps) => {
  return (
    <ModalWrapper>
      <ModalComponent content={children} />
    </ModalWrapper>
  )
}

export default MyModal
