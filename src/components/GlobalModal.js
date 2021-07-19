import Modal from "react-modal"
import { useContext } from "react"
import { stateContext } from "../stateReducer"
import BookingModal from "./BookingModal"

const GlobalModal = () => {
  const { dispatch, modalOpen, modalType } = useContext(stateContext)
  
  const renderModal = () => {
    switch(modalType) {
        case "bookings": {
            return <BookingModal/>
        }
    }
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => dispatch({
        type: "setModalOpen",
        modalOpen: false,
      })}
    >
        {renderModal()}
    </Modal>
  )
}

export default GlobalModal
