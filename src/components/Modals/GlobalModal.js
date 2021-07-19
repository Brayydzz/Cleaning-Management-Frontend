import Modal from "react-modal"
import { useContext } from "react"
import { stateContext } from "../../stateReducer"
import BookingModal from "./BookingModal"
import EmployeeModal from "./EmployeeModal"
import ClientModal from "./ClientModal"
import { Client } from "fb-watchman"

const GlobalModal = () => {
  const { dispatch, modalOpen, modalType } = useContext(stateContext)
  
  const renderModal = () => {
    switch(modalType) {
        case "bookings": {
            return <BookingModal/>
        }
        case "employees": {
          return <EmployeeModal />
        }
        case "clients": {
          return <ClientModal />
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
